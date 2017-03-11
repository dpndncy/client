import {Activity} from "./Activity";
import {Enrollment} from "./Enrollment";

export class ActivitySubmission {
  activity: Activity;
  enrollment: Enrollment;
  githubLink: string;
  completed: boolean;
  evaluated: boolean;
}
