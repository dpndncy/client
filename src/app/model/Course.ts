import {CourseCategory} from "./CourseCategory";
import {User} from "./User";
import {Tag} from "./Tag";
import {Module} from "./Module";
import {CourseLevel} from "./CourseLevel";

export class Course {
  name : string;
  description: string;
  published: boolean;
  category: CourseCategory;
  author: User;
  tagList: Tag[];
  moduleList: Module[];
  level: CourseLevel;
  wasPublished: boolean;
}
