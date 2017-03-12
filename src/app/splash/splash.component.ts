import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {OAuthService} from "angular2-oauth2/oauth-service";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private oauthService: OAuthService) { }

  ngOnInit() {
    let parts = this.oauthService.getFragment();
    var accessToken = parts["access_token"];
    if(!accessToken) {
      this.userService.me().subscribe(response => {
        this.router.navigate(['/home']);
      }, error => {
        this.router.navigate(['/index']);
      });
    }
  }

}
