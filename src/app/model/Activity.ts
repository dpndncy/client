import {LearningResource} from "./LearningResource";

export class Activity {
  name: string;
  description: string;
  published: boolean;
  evaluationGuidelines : string;
  resourceList : LearningResource[];
}
