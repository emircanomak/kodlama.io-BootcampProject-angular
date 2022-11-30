import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../../../services/employee.service';
import { Component } from '@angular/core';
import { ICreateEmployeeModel } from 'src/app/models/request/employee/createEmployeeModel';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  employees : ICreateEmployeeModel[] = []

  constructor(private employeeService : EmployeeService , private activatedRoute : ActivatedRoute){}

  ngOnInit(){
    this.activatedRoute.params.subscribe(params=>{
      this.getEmployee()
    })
  }

  getEmployee(){
    this.employeeService.getEmployee().subscribe(data=> this.employees = data)
  }
}
