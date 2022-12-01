import { ApplicantService } from './../../../services/applicant.service';
import { Component } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-applicant',
  templateUrl: './add-applicant.component.html',
  styleUrls: ['./add-applicant.component.css']
})
export class AddApplicantComponent {

  constructor(private FormBuilder : FormBuilder, private applicantService : ApplicantService, private activatedRoute :ActivatedRoute){}

  applicantAddForm : FormGroup

  ngOnInit(): void {

  }

  createApplicantAddform(){
    this.applicantAddForm = this.FormBuilder.group({
      // brandId:[""],
      // description:[""],
      // plate:[""],
      // model:[""],
      // imgUrl:[""],
      // colorId:[""]
      

    })
  }

}
