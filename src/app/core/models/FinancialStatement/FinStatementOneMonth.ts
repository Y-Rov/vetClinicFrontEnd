import { ResourceModel } from "../ResourceModel";
import { Expences } from "./Expences";
import { Income } from "./Income";

export class FinStatementOneMonth extends ResourceModel<FinStatementOneMonth> {
  month?: string
  expences?: Expences[];
  incomes?: Income[];
  totalExpences?: number;
  totalIncomes?: number;

  constructor(model?: Partial<FinStatementOneMonth>) {
    super(model);
  }
}

