import { ILoginModel } from './../models/request/login/loginModel';
import { IRegisterModel } from './../models/request/register/registerModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl= "http://localhost:3000/users"
  constructor(private httpClient:HttpClient) { }

  add(value:ILoginModel){
    return this.httpClient.post(this.apiUrl, value)
  }

  userRegister(user:ILoginModel){
    return this.httpClient.get<ILoginModel>(this.apiUrl+"?email="+ user.email+"&password="+ user.password)
  }

}
