import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private authService:AuthService, private router:Router) {}

  ngOnInit():void {
    // this.logout()
  }

  logout(){
    this.authService.logout()
    this.router.navigate(["home-login"])
  }

}
