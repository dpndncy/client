import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {UserResolver} from "./resolvers/user.resolver";
import {HomeComponent} from "./home/home.component";
import {IndexComponent} from "./index/index.component";

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'index',
    component: IndexComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
