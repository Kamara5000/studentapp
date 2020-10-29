import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {
  constructor(public router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    let user= localStorage.getItem('currentstudent');
      if (user) {
        return true;
      }
      else{
        this.router.navigate([`/home`])
      }

      // let myTodo= JSON.parse(localStorage.getItem('todos'));

      // if (myTodo) {
      //   return true;
      // }
      // else{
      //   this.router.navigate([`/todos/details/`])      }
  }
  
}
