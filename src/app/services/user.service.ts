import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {User} from "../model/User";
import {Observable, Subject} from "rxjs";
import Profile = firefox.Profile;

@Injectable()
export class UserService {

  user: User;

  constructor(private http: Http) { }

  public me(): Observable<User> {
    return this.http.get("/api/user/me").map(response => {
      this.user = response.json().user;
      return this.user;
    });
  }

  public profile(username:string): Observable<Profile> {
    return this.http.get("/api/user/profile/${username}").map(response => {
      return response.json();
    });
  }

  public login(accessToken: string): Observable<User> {
    let headers: Headers = new Headers();
    headers.append("X-Auth-Token", accessToken);
    return this.http.post("/api/user/login", "", {
      "headers" : headers
    }).map(response => {
      this.user = response.json().user;
      return this.user;
    });
  }

  public logout(): Observable<boolean> {
    return this.http.post("/api/user/logout", {}).map(response => {
      this.user = null;
      return response.json();
    });
  }

}
