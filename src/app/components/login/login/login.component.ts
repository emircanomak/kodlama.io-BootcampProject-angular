import { ILoginModel } from './../../../models/request/login/loginModel';
import { AuthService } from './../../../services/auth.service';
import { ITokenModel } from './../../../models/request/login/tokenModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginAddForm:FormGroup
  tokenModel:ITokenModel

  constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router){}

  ngOnInit(): void {
    
    this.createLoginForm();
  
  }

  createLoginForm(){

    this.loginAddForm = this.formBuilder.group({

        email:["",Validators.required],
        password:["",Validators.required]
    })

  }
  
  login(){

    if(this.loginAddForm.valid){

      let loginModal:ILoginModel = this.loginAddForm.value;
      this.authService.login(loginModal).subscribe((data)=>{

        if(data.length>0){
          this.tokenModel = data[0]
          localStorage.setItem("token", this.tokenModel.token)
          this.router.navigate(["admin"])
          alert("Giriş Başarılı")
        }
        else{
          alert("Başaramadın")
        }
      })
    }


  }
  
    
}
