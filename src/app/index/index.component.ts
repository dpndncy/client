import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [LoginComponent]
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
