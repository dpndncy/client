import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {User} from "../model/User";
import {Profile} from "../model/Profile";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  public user: User;
  public profile: Profile;

  constructor(private http: Http) { }

  public me(): Observable<User> {
    return this.http.get("/api/user/me").map(response => {
      this.user = response.json();
      return this.user;
    });
  }

  public profile(username:string): Observable<Profile> {
    return this.http.get("/api/user/profile/${username}").map(response => {
      return response.json();
    });
  }

  public profile(): Observable<Profile> {
    return this.http.get("/api/user/profile").map(response => {
      this.profile = response.json();
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
