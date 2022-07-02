import { ResourceModel } from "../ResourceModel";
import { FinStatementOneMonth } from "./FinStatementOneMonth";
import { MyDate } from "./MyDate";

export class FinancialStatement extends ResourceModel<FinancialStatement> {
  period?: MyDate;
  statementsForEachMonth?: FinStatementOneMonth[];

  constructor(model?: Partial<FinancialStatement>) {
    super(model);
  }
}
