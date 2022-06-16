import { Specialization } from "./Specialization";

export interface Procedure {
    id: number;
    name: string;
    description: string;
    durationInMinutes: number;
    cost: number;
    specializations: Specialization[];
}
