import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { CanActivate } from '@angular/router/src/interfaces';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService:AuthService) { }

 canActivate(activatedRoute:ActivatedRouteSnapshot, routerState:RouterStateSnapshot){
  return this.authService.isAuthenticated();
 }

}
