import {Activity} from "./Activity";
import {ActivitySubmission} from "./ActivitySubmission";

export class ActivityInfo {
  activity: Activity;
  submissionCount: number;
  latestSubmissions: ActivitySubmission[];
}
