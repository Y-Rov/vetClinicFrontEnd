import { ResourceModel } from "./ResourceModel";
import { Specialization } from "./Specialization";

export class Procedure extends ResourceModel<Procedure> {
    name?: string ;
    description?: string ;
    durationInMinutes?: number;
    cost?: number;
    specializations?: Specialization[];

    constructor(model?: Partial<Procedure>) {
        super(model);
      }
}
