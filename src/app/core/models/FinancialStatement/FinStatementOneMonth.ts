import { ResourceModel } from "../ResourceModel";
import { Expences } from "./Expences";
import { Income } from "./Income";

export class FinStatementOneMonth extends ResourceModel<FinStatementOneMonth> {
  month?: string
  expencesList?: Expences[];
  incomesList?: Income[];
  totalExpences?: number;
  totalIncomes?: number;
  isIncomesExpanded: boolean = false;
  isExpencesExpanded: boolean = false;

  constructor(model?: Partial<FinStatementOneMonth>) {
    super(model);
  }
}

