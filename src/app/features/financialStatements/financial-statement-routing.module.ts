import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialStatementPageComponent } from './Components/financial-statement-page/financial-statement-page.component';


const routes: Routes = [{ path: '', component: FinancialStatementPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialStatementRoutingModule { }
