import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAnimalComponent } from "./components/main-animal/main-animal.component";

const routes: Routes = [
  {
    path: '',
    component: MainAnimalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
