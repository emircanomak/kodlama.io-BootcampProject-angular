import { ICreateEmployeeModel } from './../models/request/employee/createEmployeeModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUpdateEmployeeModel } from '../models/request/employee/updateEmployeeModel';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl = 'http://localhost:3000/employee';
  employees: ICreateEmployeeModel[] = [];

  constructor(private httpClient: HttpClient) {}

  getEmployee(): Observable<ICreateEmployeeModel[]> {
    return this.httpClient.get<ICreateEmployeeModel[]>(this.apiUrl);
  }
  addEmployee(value: any) {
    return this.httpClient.post(this.apiUrl, value);
  }

  delete(data: ICreateEmployeeModel): Observable<ICreateEmployeeModel> {
    return this.httpClient.delete<ICreateEmployeeModel>(
      this.apiUrl + '/' + data.id
    );
  }

  //update employee part
  getEmployeeById(id: number): Observable<IUpdateEmployeeModel> {
    return this.httpClient.get<IUpdateEmployeeModel>(this.apiUrl + '/' + id);
  }

  update(
    id,
    employeeModel: IUpdateEmployeeModel
  ): Observable<IUpdateEmployeeModel> {
    return this.httpClient.put<IUpdateEmployeeModel>(
      this.apiUrl + '/' + id,
      employeeModel
    );
  }

  getEmployeeDetail(id: number): Observable<ICreateEmployeeModel[]> {
    return this.httpClient.get<ICreateEmployeeModel[]>(
      this.apiUrl + '?q&id=' + id
    );
  }
}
