import { ApplicationService } from './../../../services/application.service';
import { ICreateApplicationModel } from './../../../models/request/application/createApplicationModel';
import { ICreateApplicantModel } from 'src/app/models/request/applicant/createApplicantModel';
import { ActivatedRoute } from '@angular/router';
import { ApplicantService } from './../../../services/applicant.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent {
  applications:ICreateApplicationModel[]=[]
  constructor(private applicationService:ApplicationService, private activatedRoute:ActivatedRoute ,private toastrService:ToastrService){}
  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params=>{
      this.getApplication();
    })
}

  getApplication(){
    this.applicationService.getApplication().subscribe(data => {
      this.applications = data
    })
  }

  deleteApplication(applicationModel : ICreateApplicationModel) {
    this.applications = this.applications.filter(m=>m  !== applicationModel);
    this.applicationService.delete(applicationModel).subscribe();
    this.toastrService.error("Silindi")
  }



}
