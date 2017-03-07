import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  public login(accessToken: string) {
    let headers: Headers = new Headers();
    headers.append("X-Auth-Token", accessToken);
    this.http.post("/api/user/login", "", {
      "headers" : headers
    }).subscribe(response => {
      console.log(JSON.stringify(response.json()));
    }, error => {
      console.error(JSON.stringify(error.json()));
    })
  }

}
