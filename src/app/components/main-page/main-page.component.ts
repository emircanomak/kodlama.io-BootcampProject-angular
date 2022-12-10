import { AuthService } from './../../services/auth.service';
import { ICreateInstructorModel } from './../../models/request/instructor/createInstructorModel';
import { InstructorService } from './../../services/instructor.service';
import { ICreateApplicationModel } from './../../models/request/application/createApplicationModel';
import { ApplicationService } from './../../services/application.service';
import { ICreateBootcampModel } from './../../models/request/bootcamp/createBootcampModel';
import { ICreateApplicantModel } from './../../models/request/applicant/createApplicantModel';
import { IGetAllApplicantResponse } from './../../models/response/applicant/getAllApplicantResponse';
import { ApplicantService } from './../../services/applicant.service';
import { Component } from '@angular/core';
import { BootcampService } from 'src/app/services/bootcamp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
fullName= localStorage.getItem("fullName")
localImg= localStorage.getItem("localImg")

constructor(private applicantService:ApplicantService, private bootcampService:BootcampService,
  private applicationService:ApplicationService, private instructorService:InstructorService,
  private router:Router, private authService:AuthService
  ){}

applicants : ICreateApplicantModel[]=[];
bootcamps : ICreateBootcampModel[]=[];
applications : ICreateApplicationModel[]=[];
instructors: ICreateInstructorModel[]=[];


ngOnInit(): void {
    this.getAll()


 }

 logout(){
  this.authService.logout()
  this.router.navigate(["home-login"])
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

}
