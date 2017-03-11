import {ActivitySubmission} from "./ActivitySubmission";
import {User} from "./User";

export class EvaluationRequest {
  activitySubmission: ActivitySubmission;
  assignee: User;
  completed: boolean;
}
