import {EvaluationRequest} from "./EvaluationRequest";
import {User} from "./User";

export class Evaluation {
  evaluationRequest: EvaluationRequest;
  evaluator: User;
  completed: boolean;
  score: number;
}
