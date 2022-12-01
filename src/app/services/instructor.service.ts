import { ICreateInstructorModel } from './../models/request/instructor/createInstructorModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InstructorService {
  apiUrl = 'http://localhost:3000/instructor';
  instructors: ICreateInstructorModel[] = [];

  constructor(private httpClient: HttpClient) {}

  getInstructor(): Observable<ICreateInstructorModel[]> {
    return this.httpClient.get<ICreateInstructorModel[]>(this.apiUrl);
  }

  add(value: any) {
    return this.httpClient.post(this.apiUrl, value);
  }

  delete(data: ICreateInstructorModel): Observable<ICreateInstructorModel> {
    return this.httpClient.delete<ICreateInstructorModel>(
      this.apiUrl + '/' + data.id
    );
  }
}
