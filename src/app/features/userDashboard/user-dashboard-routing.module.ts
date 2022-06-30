import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from "./components/users/users.component";
import { RolesGuard } from "../../helpers/roles-guard/roles.guard";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [RolesGuard],
    data: {allowedRoles: ['Admin']}
  },
  {
    path: ':id',
    loadChildren: () => import('../userProfile/user-profile.module').then(m => m.UserProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
