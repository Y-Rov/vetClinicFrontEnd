import { Expences } from "./Expences";
import { Income } from "./Income";

export class FinStatementOneMonth {
  month?: string
  expences?: Expences[];
  incomes?: Income[];
  totalExpences?: number;
  totalIncomes?: number;
}

