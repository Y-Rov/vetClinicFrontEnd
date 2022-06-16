import {Procedure} from "./Procedure";

export interface Specialization{
  id: number;
  name: string;
  procedures?: Procedure[];
}
