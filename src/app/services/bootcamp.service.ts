import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateBootcampModel } from '../models/request/bootcamp/createBootcampModel';

@Injectable({
  providedIn: 'root',
})
export class BootcampService {
  apiUrl = ' http://localhost:3000/bootcamp';
  bootcampModel: ICreateBootcampModel[] = [];

  constructor(private httpClient: HttpClient) {}

  getBootcamp(): Observable<ICreateBootcampModel[]> {
    return this.httpClient.get<ICreateBootcampModel[]>(this.apiUrl);
  }
  getBootcampById(id: number): Observable<ICreateBootcampModel> {
    return this.httpClient.get<ICreateBootcampModel>(this.apiUrl + '/' + id);
  }

  add(value: any) {
    return this.httpClient.post(this.apiUrl, value);
  }

  delete(bootcamp: ICreateBootcampModel): Observable<ICreateBootcampModel> {
    return this.httpClient.delete<ICreateBootcampModel>(
      this.apiUrl + '/' + bootcamp.id
    );
  }

  update(id, bootcamp: any) {
    return this.httpClient.put(this.apiUrl + '/' + id, bootcamp);
  }

  getBootcampDetail(id: number): Observable<ICreateBootcampModel[]> {
    return this.httpClient.get<ICreateBootcampModel[]>(
      this.apiUrl + '?q&id=' + id
    );
  }
}
