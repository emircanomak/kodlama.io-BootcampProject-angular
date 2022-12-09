import { Observable } from 'rxjs';
import { ICreateApplicationModel } from './../models/request/application/createApplicationModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  applicationModel: ICreateApplicationModel[] = [];

  apiUrl = 'http://localhost:3000/application';

  constructor(private httpClient: HttpClient) {}

  getApplication(): Observable<ICreateApplicationModel[]> {
    return this.httpClient.get<ICreateApplicationModel[]>(this.apiUrl);
  }

  getApplicationById(id: number): Observable<ICreateApplicationModel> {
    return this.httpClient.get<ICreateApplicationModel>(this.apiUrl + '/' + id);
  }
  getUserId(id:string):Observable<ICreateApplicationModel[]>{
    return this.httpClient.get<ICreateApplicationModel[]>(this.apiUrl + '?userId=' + id);

  }

  add(value: any) {
    return this.httpClient.post(this.apiUrl, value);
  }

  delete(
    applicationModel: ICreateApplicationModel
  ): Observable<ICreateApplicationModel> {
    return this.httpClient.delete<ICreateApplicationModel>(
      this.apiUrl + '/' + applicationModel.id
    );
  }
  update(id: number, application: any) {
    return this.httpClient.put(this.apiUrl + '/' + id, application);
  }

  getApplicationDetail(id: number): Observable<ICreateApplicationModel[]> {
    return this.httpClient.get<ICreateApplicationModel[]>(
      this.apiUrl + '?q&id=' + id
    );
  }
}
