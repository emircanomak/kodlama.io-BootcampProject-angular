import { ApplicationService } from './../../../services/application.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUpdateApplicationModel } from 'src/app/models/request/application/updateApplicationModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-application',
  templateUrl: './update-application.component.html',
  styleUrls: ['./update-application.component.css']
})
export class UpdateApplicationComponent {
  
  applicationUpdateForm:FormGroup
  application:IUpdateApplicationModel


  constructor(private formBuilder:FormBuilder , private applicationService:ApplicationService,private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService){}

  ngOnInit(){

    this.activatedRoute.params.subscribe((params)=>{
      this.getApplicationById(params["id"])
    })

  } 

  getApplicationById(applicationId:number){
      this.applicationService.getApplicationById(applicationId).subscribe(data=>{
        this.application = data
        this.createUpdateForm();
      })
  }


  updateApplication(){
    this.applicationService.update(this.activatedRoute.snapshot.params["id"],this.applicationUpdateForm.value).subscribe(()=>{

    })
    this.toastrService.success("Güncellendi")
  }

  createUpdateForm(){
    this.applicationUpdateForm = this.formBuilder.group({  
      
      userId:[this.application.userId, Validators.required],
      bootcampId:[this.application.bootcampId, Validators.required],
      applicantId:[this.application.applicantId, Validators.required],
      state:[this.application.state,Validators.required]
      
      
    })
  }



}
