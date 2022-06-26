import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserProfileInfoComponent} from "./components/user-profile-info/user-profile-info.component";
import {AuthGuard} from "../../helpers/auth-guard/auth.guard";
import {UserBaseEditComponent} from "./components/user-profile-edit/user-base-edit.component";

const routes: Routes = [
  {
    path: '',
    component: UserProfileInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit',
    component: UserBaseEditComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserProfileRoutingModule {}
