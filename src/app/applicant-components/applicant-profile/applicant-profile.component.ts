import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApplicationService } from './../../services/application.service';
import { Component } from '@angular/core';
import { ICreateApplicationModel } from 'src/app/models/request/application/createApplicationModel';

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.css']
})
export class ApplicantProfileComponent {
   applications:ICreateApplicationModel[]=[]
   constructor(
    private applicationService:ApplicationService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute
   ){}

   ngOnInit(){
    this.getApplication(localStorage.getItem("userId"))
   }

   getApplication(id:string){
    this.applicationService.getUserId(id).subscribe(data=>{this.applications=data
    
      console.log(data)
    })
      
    }
 }