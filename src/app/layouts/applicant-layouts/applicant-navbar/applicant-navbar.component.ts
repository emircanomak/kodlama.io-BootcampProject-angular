import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-applicant-navbar',
  templateUrl: './applicant-navbar.component.html',
  styleUrls: ['./applicant-navbar.component.css']
})
export class ApplicantNavbarComponent {
  constructor(private authService:AuthService, private router:Router){}
  name= localStorage.getItem("name")

  ngOnInit(): void{

  }

  logout(){
    this.authService.logout();
    this.router.navigate(["home-login"])
  }
}
