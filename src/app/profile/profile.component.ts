import {Component, OnInit, OnDestroy} from '@angular/core';
import {UserService} from "../services/user.service";
import {Profile} from "../model/Profile";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  private dataLoaded: boolean = false;
  private profile: Profile;
  private error: string;
  private id: string;
  private sub: any;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.dataLoaded = false;
      this.error = null;
      this.id = params['username'];
      this.userService.getProfile(this.id).subscribe(response => {
        this.dataLoaded = true;
        this.profile = response;
      }, error => {
        this.dataLoaded = true;
        this.error = "Failed to fetch user profile from server";
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
