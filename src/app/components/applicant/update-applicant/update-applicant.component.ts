import { ApplicantService } from './../../../services/applicant.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUpdateApplicantModel } from 'src/app/models/request/applicant/updateApplicantModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-applicant',
  templateUrl: './update-applicant.component.html',
  styleUrls: ['./update-applicant.component.css']
})
export class UpdateApplicantComponent {

  applicant  : IUpdateApplicantModel
  applicantUpdateForm : FormGroup

  ngOnInit(){

    this.activatedRoute.params.subscribe((params)=>{
      this.getApplicantId(params["id"])//async;
      
    })
    
  }

  constructor(private applicantService : ApplicantService, private formBuilder : FormBuilder , private activatedRoute : ActivatedRoute,
    private toastrService:ToastrService){}

  createApplicantUpdateform(){
    this.applicantUpdateForm = this.formBuilder.group({
      firstName:[this.applicant.firstName , Validators.required],
      lastName:[this.applicant.lastName , Validators.required],
      email:[this.applicant.email , Validators.required],
      password:[this.applicant.password , Validators.required],
      nationalIdentity:[this.applicant.nationalIdentity , Validators.required],
      dateOfBirth:[this.applicant.dateOfBirth , Validators.required],
      about:[this.applicant.about , Validators.required],
    })
    
  }

  getApplicantId(id:number){
    this.applicantService.getApplicantById(id).subscribe((data)=>{
      this.applicant=data
      this.createApplicantUpdateform()
    
    })
  }

  update(){
    this.applicantService.update(this.activatedRoute.snapshot.params["id"], this.applicantUpdateForm.value).subscribe(data=>{

    });
    this.toastrService.success("Güncellendi")
  }

}
