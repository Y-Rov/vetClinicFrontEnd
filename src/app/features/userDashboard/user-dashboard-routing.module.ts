import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {RolesGuard} from "../../helpers/roles-guard/roles.guard";
import {DoctorsComponent} from "./components/doctors/doctors.component";

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [RolesGuard],
    data: {allowedRoles: ['Admin']}
  },
  {
    path: 'doctors',
    component: DoctorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
