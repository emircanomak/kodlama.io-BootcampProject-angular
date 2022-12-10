import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICreateApplicantModel } from 'src/app/models/request/applicant/createApplicantModel';
import { ICreateApplicationModel } from 'src/app/models/request/application/createApplicationModel';
import { ICreateBootcampModel } from 'src/app/models/request/bootcamp/createBootcampModel';
import { ICreateInstructorModel } from 'src/app/models/request/instructor/createInstructorModel';
import { ApplicantService } from 'src/app/services/applicant.service';
import { ApplicationService } from 'src/app/services/application.service';
import { AuthService } from 'src/app/services/auth.service';
import { BootcampService } from 'src/app/services/bootcamp.service';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-instructor-profile',
  templateUrl: './instructor-profile.component.html',
  styleUrls: ['./instructor-profile.component.css']
})
export class InstructorProfileComponent {
  fullName= localStorage.getItem("fullName")
  localImg= localStorage.getItem("localImg")

  constructor(
  private applicantService:ApplicantService, private bootcampService:BootcampService,
  private applicationService:ApplicationService, private instructorService:InstructorService,
  private router:Router, private authService:AuthService

   
  ) {}
applicants : ICreateApplicantModel[]=[];
bootcamps : ICreateBootcampModel[]=[];
applications : ICreateApplicationModel[]=[];
instructors: ICreateInstructorModel[]=[];

  ngOnInit(): void {

    this.getAll()
 
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

}




