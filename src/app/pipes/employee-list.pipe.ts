import { filter } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { ICreateEmployeeModel } from '../models/request/employee/createEmployeeModel';

@Pipe({
  name: 'employeeList'
})
export class EmployeeListPipe implements PipeTransform {

  transform(value: ICreateEmployeeModel[],  filterEmployee:string): ICreateEmployeeModel[] {

    filterEmployee=filterEmployee?filterEmployee.toLocaleLowerCase():null
    return filterEmployee?value.filter((e:ICreateEmployeeModel)=>e.firstName.toLocaleLowerCase().indexOf(filterEmployee)!==-1):value;

  }

}
