import { BootcampService } from './../../../services/bootcamp.service';
import { ApplicantService } from './../../../services/applicant.service';
import { ApplicationService } from './../../../services/application.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUpdateApplicationModel } from 'src/app/models/request/application/updateApplicationModel';
import { ToastrService } from 'ngx-toastr';
import { IUpdateBootcampModel } from 'src/app/models/request/bootcamp/updateBootcampModel';
import { IUpdateApplicantModel } from 'src/app/models/request/applicant/updateApplicantModel';

@Component({
  selector: 'app-update-application',
  templateUrl: './update-application.component.html',
  styleUrls: ['./update-application.component.css']
})
export class UpdateApplicationComponent {
  
  applicationUpdateForm:FormGroup
  application:IUpdateApplicationModel
  applicants : IUpdateApplicantModel[] = [];
  bootcamps : IUpdateBootcampModel[] = []


  constructor(private formBuilder:FormBuilder , private applicationService:ApplicationService,private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private applicantService: ApplicantService,
    private bootcampService : BootcampService
    ){}

  ngOnInit(){

    this.getApplicants();
    this.getBootcamps();

  } 

  
  getApplicationById(applicationId:number){
      this.applicationService.getApplicationById(applicationId).subscribe(data=>{
        this.application = data
        this.createUpdateForm();
      })
  }

  getApplication(){
    this.activatedRoute.params.subscribe((params)=>{
      this.getApplicationById(params["id"])
    })
  }

  getApplicants(){
    this.applicantService.getApplicant().subscribe(data=>{
      this.applicants = data;
      this.getApplication();
    })
  }

  getBootcamps(){
    this.bootcampService.getBootcamp().subscribe(data=>{
      this.bootcamps = data;
      this.getApplication();
    })
  }



  createUpdateForm(){
    this.applicationUpdateForm = this.formBuilder.group({  
      
      // userId:[this.application.userId, Validators.required],
      bootcampId:[this.application.bootcampId, Validators.required],
      applicantId:[this.application.applicantId, Validators.required],
      state:[this.application.state,Validators.required]
    })
  }

  
  updateApplication(){
    if(this.applicationUpdateForm.valid){
      let application : IUpdateApplicationModel = Object.assign({}, this.applicationUpdateForm.value);
      this.applicantService.getApplicantById(application.applicantId).subscribe(applicant=>{
        application.applicantName = applicant.firstName +''+ applicant.lastName;
        this.bootcampService.getBootcampById(application.bootcampId).subscribe(bootcamp=>{
          application.bootcampName = bootcamp.name;

          this.applicationService.update(this.activatedRoute.snapshot.params["id"], application).subscribe(()=>{
            
          });this.toastrService.success('Başvuru Bilgileri Güncellendi !');
        });
        
      }) 
    }else{
      this.toastrService.error('Eksik Bilgi !!!')
    }




    // this.applicationService.update(this.activatedRoute.snapshot.params["id"],this.applicationUpdateForm.value).subscribe(()=>{

    // })
    // this.toastrService.success("Güncellendi")
  }

  



}
