import { ICreateApplicationModel } from './../../../models/request/application/createApplicationModel';
import { ToastrService } from 'ngx-toastr';
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
  role:ILoginModel
  application:ICreateApplicationModel
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router, private toastrService:ToastrService){}

  ngOnInit(): void {
    
    this.createLoginForm();
  
  }

  createLoginForm(){

    this.loginAddForm = this.formBuilder.group({

        email:["",Validators.required],
        password:["",Validators.required]
    })

  }
  
  // login(){

  //   if(this.loginAddForm.valid){

  //     let loginModal:ILoginModel = this.loginAddForm.value;
  //     this.authService.login(loginModal).subscribe((data)=>{

  //       if(data.length>0){
  //         this.tokenModel = data[0]
  //         localStorage.setItem("token", this.tokenModel.token)
  //         this.router.navigate(["admin"])
  //         alert("Giriş Başarılı")
  //       }
  //       else{
  //         alert("Başaramadın")
  //       }
  //     })
  //   }


  // }

  login(){

    if (this.loginAddForm.valid){
      this.authService.login(this.loginAddForm.value).subscribe((data)=> {
        if(data){
          data[0].role == "roleInstructor" ? this.router.navigate(["instructor"])
          :data[0].role == "roleAdmin" ? this.router.navigate(["admin"])
          : this.router.navigate(["applicant"])
          localStorage.setItem("token", data[0].token);
          localStorage.setItem("role", data[0].role);
          localStorage.setItem("userId",data[0].id);
          localStorage.setItem("name",data[0].name)
          this.toastrService.success("Giriş Başarılı")
        }else {
          this.toastrService.error("Giriş Başarısız")
        }
      });
    }
    

  }
  
    
}
