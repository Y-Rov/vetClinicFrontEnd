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
    path: 'appointments',
    loadChildren: () => import('./features/appointments/appointments.module').then(m => m.AppointmentsModule)
  },
  {
    path: 'specializations',
    loadChildren: () => import('./features/specializations/specialization.module').then(m => m.SpecializationModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./features/companyBlog/company-blog.module').then(m => m.CompanyBlogModule)
  },
  {
    path: 'animals',
    loadChildren: ()=> import('./features/animal/animal.module').then(m=>m.AnimalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
