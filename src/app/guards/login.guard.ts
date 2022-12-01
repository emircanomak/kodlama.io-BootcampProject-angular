import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let isAuthenticated = this.authService.isAuthenticated();
      if(isAuthenticated==true){
         return true;

      }else{
        this.router.navigate(["login"])
        alert("Sisteme Giriş Yapınız !!!")
        return false;
      }
    
    
  }
  
}
