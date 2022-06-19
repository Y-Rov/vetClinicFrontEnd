import { ResourceModel } from "./ResourceModel";

export class Employee extends ResourceModel<Employee> {
  name?: string|null;

  constructor(model?: Partial<Employee>) {
  super(model);
}
}
