import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SpecializationListComponent} from "./components/specialization-list/specialization-list.component";

const routes: Routes = [
  {
    path: '',
    component: SpecializationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecializationRoutingModule { }
