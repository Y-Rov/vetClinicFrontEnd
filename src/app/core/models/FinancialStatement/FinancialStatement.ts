import { FinStatementOneMonth } from "./FinStatementOneMonth";
import { MyDate } from "./MyDate";

export class FinancialStatement {
  period?: MyDate;
  statementsForEachMonth?: FinStatementOneMonth[];
}
