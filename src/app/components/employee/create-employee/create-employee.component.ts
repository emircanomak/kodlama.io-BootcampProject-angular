import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../../../services/employee.service';
import { ICreateEmployeeModel } from './../../../models/request/employee/createEmployeeModel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent {
  employees: ICreateEmployeeModel[] = [];

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getEmployee();
    });
  }

  getEmployee() {
    this.employeeService
      .getEmployee()
      .subscribe((data) => (this.employees = data));
  }

  delete(data: ICreateEmployeeModel) {
    this.employees = this.employees.filter((x) => x !== data);
    this.employeeService.delete(data).subscribe();
  }
}
