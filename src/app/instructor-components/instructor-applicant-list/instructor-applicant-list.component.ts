import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICreateApplicantModel } from 'src/app/models/request/applicant/createApplicantModel';
import { ApplicantService } from 'src/app/services/applicant.service';

@Component({
  selector: 'app-instructor-applicant-list',
  templateUrl: './instructor-applicant-list.component.html',
  styleUrls: ['./instructor-applicant-list.component.css'],
})
export class InstructorApplicantListComponent {
  applicants: ICreateApplicantModel[] = [];

  constructor(
    private applicantService: ApplicantService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getApplicant();
    });
  }

  getApplicant() {
    this.applicantService.getApplicant().subscribe((data) => {
      this.applicants = data;
    });
  }

  deleteApplicant(applicantModel: ICreateApplicantModel) {
    this.applicants = this.applicants.filter((m) => m !== applicantModel);
    this.applicantService.delete(applicantModel).subscribe();
  }
}
