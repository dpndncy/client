import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {CourseCategory} from "../model/CourseCategory";
import {Observable} from "rxjs";
import {Course} from "../model/Course";
import {CourseInfo} from "../model/CourseInfo";
import {ModuleInfo} from "../model/ModuleInfo";
import {ActivityInfo} from "../model/ActivityInfo";
import {Tag} from "../model/Tag";
import {CourseCreateRequest} from "../model/CourseCreateRequest";
import {CoursePublishRequest} from "../model/CoursePublishRequest";
import {TagCourseRequest} from "../model/TagCourseRequest";
import {CourseUpdateRequest} from "../model/CourseUpdateRequest";

@Injectable()
export class CourseService {

  constructor(private http: Http) { }

  public categories(): Observable<CourseCategory[]> {
    return this.http.get(`/course/categories`).map(response => response.json());
  }

  public latestCourses(count: number): Observable<Course[]> {
    return this.http.get(`/api/course/latest?count=${count}`).map(response => response.json());
  }

  public searchCoursesByTag(tag: string, page: number, size: number): Observable<Course[]> {
    return this.http.get(`/api/course/search/byTag?tag=${tag}&page=${page}&size=${size}`).map(response => response.json());
  }

  public searchCoursesByCategory(category: string, page: number, size: number): Observable<Course[]> {
    return this.http.get(`/api/course/search/byCategory?category=${category}&page=${page}&size=${size}`).map(response => response.json());
  }

  public searchCoursesByName(name: string, page: number, size: number): Observable<Course[]> {
    return this.http.get(`/api/course/search/byName?name=${name}&page=${page}&size=${size}`).map(response => response.json());
  }

  public searchCourses(q: string, page: number, size: number): Observable<Course[]> {
    return this.http.get(`/api/course/search?q=${q}&page=${page}&size=${size}`).map(response => response.json());
  }

  public getCourseInfo(author: string, name: string): Observable<CourseInfo> {
    return this.http.get(`/api/course/info?author=${author}&name=${name}`).map(response => response.json());
  }

  public getModuleInfo(author: string, course: string, name: string): Observable<ModuleInfo> {
    return this.http.get(`/api/module/info?author=${author}&name=${name}&course=${course}`).map(response => response.json());
  }

  public getActivityInfo(author: string, course: string, module: string, name: string): Observable<ActivityInfo> {
    return this.http.get(`/api/activity/info?author=${author}&name=${name}&course=${course}&module=${module}`).map(response => response.json());
  }

  public searchTags(q: string, page: number, size: number): Observable<Tag[]> {
    return this.http.get(`/api/tags/search?q=${q}&page=${page}&size=${size}`).map(response => response.json());
  }

  public createCourse(request: CourseCreateRequest): Observable<Course> {
    return this.http.post(`/api/courses`, request).map(response => response.json());
  }

  public updateCourse(id: number, request: CourseUpdateRequest): Observable<Course> {
    return this.http.put(`/api/course/${id}`, request).map(response => response.json());
  }

  public publishCourse(id: number, request: CoursePublishRequest): Observable<Course> {
    return this.http.put(`/api/course/${id}/publish`, request).map(response => response.json());
  }

  public tagCourse(id: number, request: TagCourseRequest): Observable<Course> {
    return this.http.put(`/api/course/${id}/tag`, request).map(response => response.json());
  }

  public createTag(request: Tag): Observable<Tag> {
    return this.http.post(`/tags`, request).map(response => response.json());
  }
}
