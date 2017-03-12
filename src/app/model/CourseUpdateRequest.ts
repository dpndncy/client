import {CourseLevel} from "./CourseLevel";

export class CourseUpdateRequest {
  name: string;
  description: string;
  categoryId: number;
  level: CourseLevel;
}
