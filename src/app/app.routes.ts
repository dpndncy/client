import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {UserResolver} from "./common/resolvers/user.resolver";
import {HomeComponent} from "./home/home.component";
import {IndexComponent} from "./index/index.component";
import {SplashComponent} from "./splash/splash.component";
import {ProfileComponent} from "./profile/profile.component";

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
  },
  {
    path: 'profile/:username',
    component: ProfileComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '',
    component: SplashComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
