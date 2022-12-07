import { Pipe, PipeTransform } from '@angular/core';
import { ICreateInstructorModel } from '../models/request/instructor/createInstructorModel';

@Pipe({
  name: 'instructorList'
})
export class InstructorListPipe implements PipeTransform {

  transform(value: ICreateInstructorModel[], filterInstructor:string): ICreateInstructorModel[] {

    filterInstructor=filterInstructor?filterInstructor.toLocaleLowerCase():null
    return filterInstructor?value.filter((e:ICreateInstructorModel)=>e.firstName.toLocaleLowerCase().indexOf(filterInstructor)!==-1):value;
   
  }

}
