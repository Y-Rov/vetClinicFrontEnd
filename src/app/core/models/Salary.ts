import { ResourceModel } from "./ResourceModel";

export class Salary extends ResourceModel <Salary>{
  value?: number | null;
  name?: string | null;

  constructor(model?: Partial<Salary>) {
    super(model);
  }
}
