import { Observable } from 'rxjs';
import { ICreateApplicationModel } from './../models/request/application/createApplicationModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  applicationModel:ICreateApplicationModel[]=[]
  path="http://localhost:3000/application"
  constructor(private httpClient:HttpClient) { }

  getApplication():Observable<ICreateApplicationModel[]>{
   return this.httpClient.get<ICreateApplicationModel[]>(this.path)
  }

}
