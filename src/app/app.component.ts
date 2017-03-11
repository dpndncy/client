import {Component, OnInit} from '@angular/core';
import { OAuthService } from 'angular2-oauth2/oauth-service';
import { LoginComponent } from './login/login.component';
import {UserService} from "./services/user.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginComponent]
})
export class AppComponent implements OnInit {

  public loaded: boolean;

  constructor(private oauthService: OAuthService, private userService: UserService, private router: Router, private route: ActivatedRoute) {

    // Login-Url
    this.oauthService.loginUrl = "https://accounts.google.com/o/oauth2/v2/auth"; //Id-Provider?

    // URL of the SPA to redirect the user to after login
    this.oauthService.redirectUri = window.location.origin;
    //this.oauthService.redirectUri = "http://localhost:8080";

      // The SPA's id. Register SPA with this id at the auth-server
    this.oauthService.clientId = "177001317035-uihvdio4q4bjdfe726r5vosl92fvp0t2.apps.googleusercontent.com";

    // The name of the auth-server that has to be mentioned within the token
    this.oauthService.issuer = "https://accounts.google.com";

    // set the scope for the permissions the client should request
    this.oauthService.scope = "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email";

    // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
    // OAuth2-based access_token
    this.oauthService.oidc = true;

    // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
    // instead of localStorage
    this.oauthService.setStorage(sessionStorage);

    // To also enable single-sign-out set the url for your auth-server's logout-endpoint here
    this.oauthService.logoutUrl = "https://steyer-identity-server.azurewebsites.net/identity/connect/endsession?id_token={{id_token}}";

    // This method just tries to parse the token within the url when
    // the auth-server redirects the user back to the web-app
    // It dosn't initiate the login
    this.oauthService.tryLogin({
      onTokenReceived: context => {
        this.userService.login(context.accessToken).subscribe(response => {
          this.loaded = true;
          this.router.navigate(['/home']);
        }, error => {
          this.loaded = true;
          this.router.navigate(['/index']);
        });
      }
    });

  }

  public ngOnInit() {
    let parts = this.oauthService.getFragment();
    var accessToken = parts["access_token"];
    if(!accessToken) {
      this.userService.me().subscribe(response => {
        this.loaded = true;
        this.router.navigate(['/home']);
      }, error => {
        this.loaded = true;
        this.router.navigate(['/index']);
      });
    }
  }

}
