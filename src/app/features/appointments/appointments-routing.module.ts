import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/helpers/auth-guard/auth.guard';
import { AppointmentsPageComponent } from './components/appointments-page/appointments-page.component';

const routes: Routes = [
{ path: '', 
component: AppointmentsPageComponent,
canActivate: [AuthGuard] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppointmentsRoutingModule { }
