import {ResourceModel} from "./ResourceModel";

export class EmailMessage extends ResourceModel<EmailMessage>{
  recipient!: string;
  subject!: string;
  body! : string;

  constructor(model?: Partial<EmailMessage>) {
    super(model);
  }
}
