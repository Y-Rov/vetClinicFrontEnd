import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesGuard } from '../../helpers/roles-guard/roles.guard';
import { FinancialStatementPageComponent } from './Components/financial-statement-page/financial-statement-page.component';


const routes: Routes = [{
  path: '',
  component: FinancialStatementPageComponent,
  canActivate: [RolesGuard],
  data: { allowedRoles: ['Accountant'] }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialStatementRoutingModule { }
