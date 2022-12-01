import { ActivatedRoute } from '@angular/router';
import { ApplicantService } from './../../../services/applicant.service';
import { ICreateApplicantModel } from 'src/app/models/request/applicant/createApplicantModel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-applicant',
  templateUrl: './detail-applicant.component.html',
  styleUrls: ['./detail-applicant.component.css'],
})
export class DetailApplicantComponent {
  applicantDetail: ICreateApplicantModel[] = [];
  constructor(
    private applicantService: ApplicantService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.getApplicantDetail(params['id'])
    );
  }

  getApplicantDetail(id: number) {
    this.applicantService
      .getApplicantDetail(id)
      .subscribe((data) => (this.applicantDetail = data));
  }
}
