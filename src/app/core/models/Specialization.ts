import {Procedure} from "./Procedure";
import {ResourceModel} from "./ResourceModel";
import {User} from "./User";

export class Specialization extends ResourceModel<Specialization>{
  name?: string;
  procedures?: Procedure[];
  users?: User[];
  constructor(model?: Partial<Specialization>) {
  super(model);
}
}
