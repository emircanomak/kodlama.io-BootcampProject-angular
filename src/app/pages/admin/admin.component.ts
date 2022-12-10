import { BootcampService } from './../../services/bootcamp.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private authService:AuthService,
     private router:Router) {}
     name= localStorage.getItem("name")

  ngOnInit():void {
    // this.logout()
  }

  logout(){
    this.authService.logout()
    this.router.navigate(["home-login"])
    
  }




}
