import {Procedure} from "../../Procedure";

export interface ProcedureParameters {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious:boolean;
  entities: Procedure[];
}
