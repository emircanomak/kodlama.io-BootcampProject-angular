import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateApplicantModel } from '../models/request/applicant/createApplicantModel';
import { IUpdateApplicantModel } from '../models/request/applicant/updateApplicantModel';

@Injectable({
  providedIn: 'root',
})
export class ApplicantService {
  add(value: any) {
    return this.httpClient.post(this.apiUrl, value);
  }

  delete(
    applicantModel: ICreateApplicantModel
  ): Observable<ICreateApplicantModel> {
    return this.httpClient.delete<ICreateApplicantModel>(
      this.apiUrl + '/' + applicantModel.id
    );
  }

  update(
    id,
    applicantModel: IUpdateApplicantModel
  ): Observable<IUpdateApplicantModel> {
    return this.httpClient.put<IUpdateApplicantModel>(
      this.apiUrl + '/' + id,
      applicantModel
    );
  }

  apiUrl = 'http://localhost:3000/applicant';

  applicants: ICreateApplicantModel[] = [];
  constructor(private httpClient: HttpClient) {}

  getApplicant(): Observable<ICreateApplicantModel[]> {
    return this.httpClient.get<ICreateApplicantModel[]>(this.apiUrl);
  }

  getApplicantById(id: number): Observable<IUpdateApplicantModel> {
    return this.httpClient.get<IUpdateApplicantModel>(this.apiUrl + '/' + id);
  }

  getApplicantDetail(id: number): Observable<ICreateApplicantModel[]> {
    return this.httpClient.get<ICreateApplicantModel[]>(
      this.apiUrl + '?q&id=' + id
    );
  }
}
