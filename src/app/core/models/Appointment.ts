import { Animal } from "./Animal";
import { Procedure } from "./Procedure";
import { ResourceModel } from "./ResourceModel";
import { User } from "./User";


export class Appointment extends ResourceModel<Appointment>{
    
    dateAndTime?: Date;
    meetHasOccureding?: boolean;
    disease?: string;
    procedures?: Procedure[];
    users?: User[];
    animal?: Animal;

  constructor(model?: Partial<Appointment>) {
      super(model);
  }
  }