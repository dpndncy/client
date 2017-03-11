import {CourseLevel} from "./CourseLevel";

export class CourseCreateRequest {
  name: string;
  description: string;
  categoryId: number;
  level: CourseLevel;
}
