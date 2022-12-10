import { ApplicationService } from './../../services/application.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BootcampService } from './../../services/bootcamp.service';
import { ICreateBootcampModel } from './../../models/request/bootcamp/createBootcampModel';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-applicant-bootcamp-list',
  templateUrl: './applicant-bootcamp-list.component.html',
  styleUrls: ['./applicant-bootcamp-list.component.css'],
})
export class ApplicantBootcampListComponent {
  bootcamps: ICreateBootcampModel[] = [];
  setBootcamp: ICreateBootcampModel;

  constructor(
    private bootcampService: BootcampService,
    private activatedRoute: ActivatedRoute,
    private applicationService: ApplicationService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getBootcamp();
    });
  }

  getBootcamp() {
    this.bootcampService
      .getBootcamp()
      .subscribe((data) => (this.bootcamps = data));
  }
  add(bootcamp: any) {
    this.setBootcamp = bootcamp;
    this.send();
    this.toastrService.success('Başvuru Yapıldı', 'Başarılı');

    this.router.navigate(['applicant/applicant-profile']);
  }
  send() {
    let bootcampData = Object.assign({});

    bootcampData.bootcampId = this.setBootcamp.id;
    bootcampData.bootcampName = this.setBootcamp.name;
    bootcampData.userName = this.setBootcamp.instructorName;
    bootcampData.state = 1;
    bootcampData.userId = localStorage.getItem('userId');
    bootcampData.applyName = localStorage.getItem('name');
    this.applicationService.add(bootcampData).subscribe();

    // userId: number;
    // bootcampId: number;
    // applicantId: number;
    // state: number;
    // bootcampName : string;
    // applicantName: string;
  }
}
