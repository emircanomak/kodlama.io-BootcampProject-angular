import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateApplicantModel } from '../models/request/applicant/createApplicantModel';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  apiUrl = "http://localhost:3000/applicant"
  applicants : ICreateApplicantModel[] = []
  constructor(private httpClient : HttpClient) { }

  getApplicant():Observable<ICreateApplicantModel[]>{

    return this.httpClient.get<ICreateApplicantModel[]>(this.apiUrl)

  }
}
