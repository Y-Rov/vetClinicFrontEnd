import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesGuard } from '../../helpers/roles-guard/roles.guard';
import { SalaryPageComponent } from './components/salary-page/salary-page.component';

const routes: Routes = [
  {
    path: '',
    component: SalaryPageComponent,
    canActivate: [RolesGuard],
    data: { allowedRoles: ['Accountant'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalariesRoutingModule { }
