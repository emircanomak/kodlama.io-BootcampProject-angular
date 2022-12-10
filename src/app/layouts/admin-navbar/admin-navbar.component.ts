import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
 filterText;
  constructor(private authService:AuthService, private router:Router) {}
  fullName= localStorage.getItem("fullName")
  ngOnInit():void {
    // this.logout()
  }

  logout(){
    this.authService.logout()
    this.router.navigate(["home-login"])
  }

}
