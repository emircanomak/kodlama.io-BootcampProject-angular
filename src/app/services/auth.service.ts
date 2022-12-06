
import { ITokenModel } from './../models/request/login/tokenModel';
import { ILoginModel } from './../models/request/login/loginModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl=" http://localhost:3000/users"


  constructor(private httpClient:HttpClient) { }

  login(user:ILoginModel){

    return this.httpClient.get<ITokenModel[]>
    (this.apiUrl + "/?email=" + user.email + "&password="+ user.password)

  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true

    }else {
      return false
    }
  }


  logout(){
      localStorage.removeItem("token")
      console.log("çıktın")
      
}
}
