import { ResourceModel } from "./ResourceModel";
import { Specialization } from "./Specialization";

export class Procedure extends ResourceModel<Procedure> {
    name?: string | null;
    description?: string | null;
    durationInMinutes?: number | null;
    cost?: number | null;
    specializations?: Specialization[];

    constructor(model?: Partial<Procedure>) {
        super(model);
      }
}