import {User} from "./User";
import {Course} from "./Course";

export class Profile {
  user: User;
  enrolledCourseList : Course[];
  authoredCourseList : Course[];
}
