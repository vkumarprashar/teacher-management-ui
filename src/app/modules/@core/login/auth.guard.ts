import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('token') !== undefined) {
      return true;
    }
    for (let key in localStorage) {
      if (
        key.includes('login.windows.net-b9806c7d-9280-4e44-afea-6dc0ff495c2f')
      ) {
        return true;
      }
    }
    return false;
  }
}
