import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [LoginComponent]
})
export class IndexComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if(this.userService.user) {
      this.router.navigate(["/home"]);
    }
  }

}
