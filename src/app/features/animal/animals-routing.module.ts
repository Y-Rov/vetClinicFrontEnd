import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAnimalComponent } from "./components/main-animal/main-animal.component";
import {AuthGuard} from "../../helpers/auth-guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: MainAnimalComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
