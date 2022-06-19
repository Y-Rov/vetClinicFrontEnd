import { Procedure } from "./Procedure";
import { User } from "./User";


export interface Appointment{
    id: number;
    date: Date;
    meetHasOccureding: boolean;
    disease: string;
    procedures: Procedure[];
    users: User[];
}