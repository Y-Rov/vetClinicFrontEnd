import { Procedure } from "./Procedure";


export interface Appointment{
    id: number;
    date: Date;
    meetHasOccureding: boolean;
    disease: string;
    procedures: Procedure[];
}