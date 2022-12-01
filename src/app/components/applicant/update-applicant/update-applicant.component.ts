import { ApplicantService } from './../../../services/applicant.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update-applicant',
  templateUrl: './update-applicant.component.html',
  styleUrls: ['./update-applicant.component.css']
})
export class UpdateApplicantComponent {

  ngOnInit(){

  }

  constructor(private applicantService : ApplicantService){}

}
