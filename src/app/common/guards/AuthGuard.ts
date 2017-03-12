import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(this.userService.user) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
