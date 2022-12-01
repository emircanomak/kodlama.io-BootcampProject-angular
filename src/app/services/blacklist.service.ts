import { IUpdateBlackListModel } from './../models/request/blackList/updateBlackListModel';
import { ICreateBlackListModel } from './../models/request/blackList/createBlackListModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlacklistService {
  blackListModel: ICreateBlackListModel[] = [];
  apiUrl = ' http://localhost:3000/blacklist';
  constructor(private httpClient: HttpClient) {}

  getBlackList(): Observable<ICreateBlackListModel[]> {
    return this.httpClient.get<ICreateBlackListModel[]>(this.apiUrl);
  }

  addBlacklist(value: any) {
    return this.httpClient.post(this.apiUrl, value);
  }

  deleteBlacklist(
    blackListModel: ICreateBlackListModel
  ): Observable<ICreateBlackListModel> {
    return this.httpClient.delete<ICreateBlackListModel>(
      this.apiUrl + '/' + blackListModel.id
    );
  }

  getBlacklistById(id: number): Observable<IUpdateBlackListModel> {
    return this.httpClient.get<IUpdateBlackListModel>(this.apiUrl + '/' + id);
  }

  update(
    id: number,
    data: IUpdateBlackListModel
  ): Observable<IUpdateBlackListModel> {
    return this.httpClient.put<IUpdateBlackListModel>(
      this.apiUrl + '/' + id,
      data
    );
  }

  getBlackListDetail(id: number): Observable<ICreateBlackListModel[]> {
    return this.httpClient.get<ICreateBlackListModel[]>(
      this.apiUrl + '?q&id=' + id
    );
  }
}
