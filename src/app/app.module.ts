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
import {UserResolver} from "./resolvers/user.resolver";
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    {
      provide: Http,
      useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router) => new HttpInterceptor(xhrBackend, requestOptions, router),
      deps: [XHRBackend, RequestOptions, Router]
    },
    OAuthService,
    UserService,
    UserResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
