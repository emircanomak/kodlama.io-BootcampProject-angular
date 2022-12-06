import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  userRoleIn=""
  constructor(private authService:AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      let url:string = state.url;
      return this.checkUserLogin(route,url);
      }
      checkUserLogin(route:ActivatedRouteSnapshot, url:any): boolean{
        if (this.authService.isAuthenticated()){
          const userRole = this.authService.getRole();
          this.userRoleIn = userRole;
         
          if(route.data["role"] && route.data["role"].indexOf(userRole) === -1){
            return false
          }
          return true;
          
        }
        return false

      }




    
      // let isAuthenticated = this.authService.isAuthenticated();
      // if(isAuthenticated==true){
      //    return true;

      // }else{
      //   this.router.navigate(["login"])
      //   alert("Sisteme Giriş Yapınız !!!")
      //   return false;
      // }
    
    
  
  
}
