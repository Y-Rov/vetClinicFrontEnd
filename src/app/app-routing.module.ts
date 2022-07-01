import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./features/userDashboard/user-dashboard.module').then(m => m.UserDashboardModule)
  },
  {
    path: 'doctors',
    loadChildren: () => import('./features/doctors/doctors.module').then(m => m.DoctorsModule)
  },
  {
    path: 'salaries',
    loadChildren: () => import('./features/salaries/salaries.module').then(m => m.SalariesModule)
   },
   {
    path: 'procedures',
    loadChildren: () => import('./features/procedures/procedures.module').then(m => m.ProceduresModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./features/companyBlog/company-blog.module').then(m => m.CompanyBlogModule)
  },
  {
    path: 'financialStatement',
    loadChildren: () => import('./features/financialStatements/financial-statement.module').then(m => m.FinancialStatementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
