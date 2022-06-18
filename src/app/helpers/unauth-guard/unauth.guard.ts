import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/authService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService) 
    { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      var isAuthorized = this.authService.isAuthorized();
      return !isAuthorized;
  }
}
