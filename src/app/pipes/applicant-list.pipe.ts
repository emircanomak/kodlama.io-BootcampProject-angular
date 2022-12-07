import { Pipe, PipeTransform } from '@angular/core';
import { ICreateApplicantModel } from '../models/request/applicant/createApplicantModel';

@Pipe({
  name: 'applicantList'
})
export class ApplicantListPipe implements PipeTransform {

  transform(value: ICreateApplicantModel[], filterApplicant:string): ICreateApplicantModel[] {
    
    filterApplicant=filterApplicant?filterApplicant.toLocaleLowerCase():null
    return filterApplicant?value.filter((a:ICreateApplicantModel)=>a.firstName.toLocaleLowerCase().indexOf(filterApplicant)!==-1):value;
  }

}
