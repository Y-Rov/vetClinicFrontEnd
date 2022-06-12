import { Specialization } from "./Specialization";

export interface Procedure {
    id: number;
    name: string;
    description: string;
    duration: number;
    cost: number;
    specializations: Specialization[];
}