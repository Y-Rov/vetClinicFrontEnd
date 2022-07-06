import {ResourceModel} from "./ResourceModel";
import {User} from "./User";

export class Feedback extends ResourceModel<Feedback>{
  email! : string;
  serviceRate! : number;
  priceRate! : number;
  supportRate! : number;
  suggestions? : string;
  userId? : number;
  user? : User;

  constructor(model?: Partial<Feedback>) {
    super(model);
  }
}
