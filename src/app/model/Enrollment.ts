import {User} from "./User";
import {Course} from "./Course";

export class Enrollment {
  user: User;
  course: Course;
  completed: boolean;
  score: number;
}
