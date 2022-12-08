import { ApplicationService } from './../../services/application.service';
import { ActivatedRoute } from '@angular/router';
import { BootcampService } from './../../services/bootcamp.service';
import { ICreateBootcampModel } from './../../models/request/bootcamp/createBootcampModel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-applicant-bootcamp-list',
  templateUrl: './applicant-bootcamp-list.component.html',
  styleUrls: ['./applicant-bootcamp-list.component.css'],
})
export class ApplicantBootcampListComponent {
  bootcamps: ICreateBootcampModel[] = [];
  setBootcamp:ICreateBootcampModel;


  constructor(
    private bootcampService: BootcampService,
    private activatedRoute: ActivatedRoute,private applicationService:ApplicationService
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
  add(bootcamp:any){
  
    this.setBootcamp=bootcamp
    this.send()

  }
  send(){
    let bootcampData = Object.assign({})

    bootcampData.bootcampId = this.setBootcamp.id
    bootcampData.bootcampName = this.setBootcamp.name
    this.applicationService.add(bootcampData).subscribe()

    // userId: number;
    // bootcampId: number;
    // applicantId: number;
    // state: number;
    // bootcampName : string;
    // applicantName: string;
  }
}
