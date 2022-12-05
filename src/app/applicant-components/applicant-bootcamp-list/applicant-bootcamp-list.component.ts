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

  constructor(
    private bootcampService: BootcampService,
    private activatedRoute: ActivatedRoute
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
}
