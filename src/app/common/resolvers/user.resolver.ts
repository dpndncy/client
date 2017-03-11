import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {User} from "../../model/User";
import {Injectable} from "@angular/core";
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";

@Injectable()
export class UserResolver implements Resolve<User> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.userService.me();
  }
}
