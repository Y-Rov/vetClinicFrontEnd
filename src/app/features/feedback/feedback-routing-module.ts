import {RouterModule, Routes} from "@angular/router";
import {FeedbacksComponent} from "./feedbacks/feedbacks.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: FeedbacksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
