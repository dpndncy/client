import {Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {User} from "../model/User";
import {Injectable} from "@angular/core";
import {UserService} from "../services/user.service";
import {Observable, Subject} from "rxjs";

@Injectable()
export class UserResolver implements Resolve<User> {

  constructor(private userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    let userSubject: Subject<User> = new Subject<User>();
    this.userService.me().subscribe(response => {
      this.router.navigate(['/home']);
    }, error => {
      userSubject.last(null);
    });
    return userSubject.asObservable();
  }
}
