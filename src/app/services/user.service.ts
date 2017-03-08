import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {User} from "../model/User";
import {Observable, Subject} from "rxjs";

@Injectable()
export class UserService {

  user: User;

  constructor(private http: Http) { }

  public login(accessToken: string): Observable<User> {
    let userSubject: Subject<User> = new Subject<User>();
    let headers: Headers = new Headers();
    headers.append("X-Auth-Token", accessToken);
    this.http.post("/api/user/login", "", {
      "headers" : headers
    }).subscribe(response => {
      this.user = response.json().user;
      userSubject.next(this.user);
    }, error => {
      userSubject.error(error);
    });
    return userSubject.asObservable();
  }

  public me(): Observable<User> {
    let userSubject: Subject<User> = new Subject<User>();
    this.http.get("/api/user/me").subscribe(response => {
      this.user = response.json().user;
      userSubject.next(this.user);
    }, error => {
      userSubject.error(error);
    });
    return userSubject.asObservable();
  }

}
