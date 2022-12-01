import { ICreateEmployeeModel } from './../models/request/employee/createEmployeeModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
