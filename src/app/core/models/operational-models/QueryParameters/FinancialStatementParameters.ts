import { FinStatementOneMonth } from "../../FinancialStatement/FinStatementOneMonth";

export interface FinancialStatementParameters {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  entities: FinStatementOneMonth[];
}
