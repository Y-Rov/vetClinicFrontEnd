import { Expences } from "./Expences";
import { Income } from "./Income";
import { MyDate } from "./MyDate";

export class FinStatementOneMonth {
  period?: MyDate;
  expences?: Expences[];
  incomes?: Income[];
  totalExpences?: number;
  totalIncomes?: number;
}

