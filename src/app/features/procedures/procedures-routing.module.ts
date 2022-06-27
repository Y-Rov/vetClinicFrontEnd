import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProceduresPageComponent } from "./components/procedures-page/procedures-page.component";

const routes: Routes = [
  {
    path: '',
    component: ProceduresPageComponent,
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProceduresRoutingModule { }
