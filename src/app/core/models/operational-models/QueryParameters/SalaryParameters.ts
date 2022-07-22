import { Salary } from "../../Salary";

export interface SalaryParameters {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  entities: Salary[];
}
