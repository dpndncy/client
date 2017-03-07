import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpInterceptor } from './utils/http_interceptor';
import { LoginComponent } from './login/login.component';
import { OAuthService } from 'angular2-oauth2/oauth-service';
import { UserService } from './services/user.service';
import { routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    { provide: Http,
      useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router) => new HttpInterceptor(xhrBackend, requestOptions, router),
      deps: [XHRBackend, RequestOptions, Router]
    },
    OAuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
