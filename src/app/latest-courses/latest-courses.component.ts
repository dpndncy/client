import { Component, OnInit } from '@angular/core';
import {CourseService} from "../services/course.service";
import {Course} from "../model/Course";

@Component({
  selector: 'app-latest-courses',
  templateUrl: './latest-courses.component.html',
  styleUrls: ['./latest-courses.component.css']
})
export class LatestCoursesComponent implements OnInit {

  private dataLoaded: boolean = false;
  public courses: Course[];
  public error: string;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.latestCourses(10).subscribe(response => {
      this.dataLoaded = true;
      this.courses = response;
    }, error => {
      this.dataLoaded = true;
      this.error = "Failed to fetch latest courses from server";
    });
  }

}
