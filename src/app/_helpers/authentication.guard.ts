import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../_services/storage.service';
import {AuthService} from "../_services/auth.service";



@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.authService.clean();
    this.router.navigate(['/login'], {queryParams: {redirect: state.url}, replaceUrl: true}).then(r =>{});
     return false;
  }

}
