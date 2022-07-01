import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialStatementRoutingModule } from './financial-statement-routing.module';
import { FinancialStatementPageComponent } from './Components/financial-statement-page/financial-statement-page.component';
import { FinancialStatementResultComponent } from './Components/financial-statement-result/financial-statement-result.component';


@NgModule({
  declarations: [
    FinancialStatementPageComponent,
    FinancialStatementResultComponent
  ],
  imports: [
    CommonModule,
    FinancialStatementRoutingModule
  ]
})
export class FinancialStatementModule { }
