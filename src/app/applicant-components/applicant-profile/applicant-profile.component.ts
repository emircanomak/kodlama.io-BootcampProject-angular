import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApplicationService } from './../../services/application.service';
import { Component } from '@angular/core';
import { ICreateApplicationModel } from 'src/app/models/request/application/createApplicationModel';
import { ApplicantService } from 'src/app/services/applicant.service';
import { BootcampService } from 'src/app/services/bootcamp.service';
import { InstructorService } from 'src/app/services/instructor.service';
import { AuthService } from 'src/app/services/auth.service';
import { ICreateApplicantModel } from 'src/app/models/request/applicant/createApplicantModel';
import { ICreateBootcampModel } from 'src/app/models/request/bootcamp/createBootcampModel';
import { ICreateInstructorModel } from 'src/app/models/request/instructor/createInstructorModel';

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.css']
})
export class ApplicantProfileComponent {
   applications:ICreateApplicationModel[]=[]
   fullName= localStorage.getItem("fullName")
   localImg= localStorage.getItem("localImg")
 
   constructor(
    private applicationService:ApplicationService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private applicantService:ApplicantService, private bootcampService:BootcampService,
    private instructorService:InstructorService,
    private router:Router, private authService:AuthService
   ){}

  applicants : ICreateApplicantModel[]=[];
  bootcamps : ICreateBootcampModel[]=[];
  instructors: ICreateInstructorModel[]=[];

   ngOnInit(){
    this.getApplication(localStorage.getItem("userId"))
    this.getAll();
   }

   getAll(){
    this.getApplicant()
    this.getBootcamp()
    this.getApplications()
    this.getInstructor()
  }

  
  getApplicant(){
    this.applicantService.getApplicant().subscribe(data => {this.applicants = data})
  }

  getBootcamp(){
    this.bootcampService.getBootcamp().subscribe(data => {this.bootcamps = data})
  }

  getApplications(){
    this.applicationService.getApplication().subscribe(data => {this.applications = data})
  }

  getInstructor(){
    this.instructorService.getInstructor().subscribe(data => {this.instructors = data})
  }

  logout(){
    this.authService.logout()
    this.router.navigate(["home-login"])
  }

   getApplication(id:string){
    this.applicationService.getUserId(id).subscribe(data=>{this.applications=data
    
      console.log(data)
    })
      
    }
 }