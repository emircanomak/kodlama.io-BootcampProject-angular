import { ICreateBootcampModel } from './../../../models/request/bootcamp/createBootcampModel';
import { ICreateApplicantModel } from './../../../models/request/applicant/createApplicantModel';
import { ApplicantService } from './../../../services/applicant.service';
import { BootcampService } from './../../../services/bootcamp.service';
import { ICreateApplicationModel } from './../../../models/request/application/createApplicationModel';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from './../../../services/application.service';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent {
  applicants : ICreateApplicantModel[] = [];
  bootcamps : ICreateBootcampModel[] = []
  applicationAddForm:FormGroup
  constructor(private formBuilder:FormBuilder,
     private applicationService:ApplicationService,
     private activatedRoute:ActivatedRoute,
     private bootcampService : BootcampService,
     private applicantService : ApplicantService,
     private toastrService:ToastrService
     ){}

  ngOnInit(){
    
    this.getApplicant();
    this.getBootcamp();

  }

  getApplicant(){
    this.applicantService.getApplicant().subscribe(data=>{
      this.applicants = data
    });
    this.createApplicationAddForm();
  }


  getBootcamp(){
    this.bootcampService.getBootcamp().subscribe(data=>{
      this.bootcamps = data
    });
    this.createApplicationAddForm();
  }


  

  createApplicationAddForm(){

    this.applicationAddForm = this.formBuilder.group({

      // userId:["", Validators.required],
      bootcampId:["", Validators.required],
      applicantId:["", Validators.required],
      state:["",Validators.required]
    })
    
  }

  add(){

    if(this.applicationAddForm.valid){
      let application : ICreateApplicationModel = Object.assign({}, this.applicationAddForm.value);
      this.applicantService.getApplicantById(application.applicantId).subscribe(applicant =>{
        application.applicantName = applicant.firstName + '' + applicant.lastName;

        this.bootcampService.getBootcampById(application.bootcampId).subscribe(bootcamp =>{
          application.bootcampName = bootcamp.name;

        this.applicationService.add(application).subscribe(data =>{
          
        });
        
      });
      
        
      });
      this.toastrService.success("Eklendi")

    }

    // if(this.applicationAddForm.value){
      
    //   let applicationInputData = Object.assign({},this.applicationAddForm.value)
    //   this.applicationService.add(applicationInputData).subscribe(data=>{
        
    //   })
    //   alert("Eklendi")
    // }

  }

}
