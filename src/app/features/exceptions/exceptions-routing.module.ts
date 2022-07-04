import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/helpers/auth-guard/auth.guard';
import { ExceptionDetailPageComponent } from './components/exception-detail-page/exception-detail-page.component';
import { ExceptionPageComponent } from './components/exception-page/exception-page.component';

const routes: Routes = [
  {
    path: '',
    component: ExceptionPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component:ExceptionDetailPageComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExceptionsRoutingModule { }
