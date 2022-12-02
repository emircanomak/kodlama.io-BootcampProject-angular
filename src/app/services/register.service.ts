import { IRegisterModel } from './../models/request/register/registerModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl= "http://localhost:3000/users"
  constructor(private httpClient:HttpClient) { }

  add(value:IRegisterModel){
    return this.httpClient.post(this.apiUrl, value)
  }

  userRegister(user:IRegisterModel){
    return this.httpClient.get<IRegisterModel[]>(this.apiUrl+"?mail="+ user.mail+"&password="+ user.password)
  }

}
