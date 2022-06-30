import {ResourceModel} from "./ResourceModel";

export class Portfolio extends ResourceModel<Portfolio> {
  description?: string | null;

  constructor(model?: Partial<Portfolio>) {
    super(model);
  }
}
