import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../../../services/employee.service';
import { ICreateEmployeeModel } from './../../../models/request/employee/createEmployeeModel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css'],
})
export class DetailEmployeeComponent {
  employeeDetail: ICreateEmployeeModel[] = [];

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.getEmployeeDetail(params['id'])
    );
  }

  getEmployeeDetail(id: number) {
    this.employeeService
      .getEmployeeDetail(id)
      .subscribe((data) => (this.employeeDetail = data));
  }
}
