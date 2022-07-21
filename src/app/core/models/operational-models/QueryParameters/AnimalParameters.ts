import {Appointment} from "../../Appointment";

export interface AnimalParameters{
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious:boolean;
  entities: Appointment[];
}
