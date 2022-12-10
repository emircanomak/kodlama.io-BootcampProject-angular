import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-navbar',
  templateUrl: './instructor-navbar.component.html',
  styleUrls: ['./instructor-navbar.component.css']
})
export class InstructorNavbarComponent {
    name= localStorage.getItem("name")
  constructor(
   private authService: AuthService,
   private route: Router
  ) {}

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout()
    this.route.navigate([""])
  }

}
