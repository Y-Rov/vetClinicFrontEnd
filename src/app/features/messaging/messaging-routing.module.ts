import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingPageComponent } from './components/messaging-page/messaging-page.component';
import { AuthGuard } from 'src/app/helpers/auth-guard/auth.guard';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MessagingPageComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MessagingRoutingModule { }
