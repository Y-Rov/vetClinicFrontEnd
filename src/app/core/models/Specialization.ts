import {Procedure} from "./Procedure";
import {ResourceModel} from "./ResourceModel";

export class Specialization extends ResourceModel<Specialization>{
  name?: string;
  procedures?: Procedure[];

  constructor(model?: Partial<Specialization>) {
  super(model);
}
}
