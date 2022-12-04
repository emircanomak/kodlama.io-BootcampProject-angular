import { Component } from '@angular/core';
import { ICreateBootcampModel } from 'src/app/models/request/bootcamp/createBootcampModel';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})


export class ApplicantComponent {

bootcamps:ICreateBootcampModel[]=[]

}
