import { Animal } from "./Animal";
import { Procedure } from "./Procedure";
import { User } from "./User";


export interface Appointment{
    id: number;
    dateAndTime: Date;
    meetHasOccureding: boolean;
    disease: string;
    procedures: Procedure[];
    users: User[];
    animal: Animal;
}