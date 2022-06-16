import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProceduresPageComponent } from './shared/components/procedureComponents/procedures-page/procedures-page.component';
import { LayoutModule } from "./layout/layout.module";
import { SharedModule } from "./shared/shared.module";
import { SpecializationListComponent } from "./shared/components/specialization-list/specialization-list.component";

import { UserProfileInfoComponent } from './shared/components/userComponents/user-profile-info/user-profile-info.component';
import { EditUserComponent } from './shared/components/userComponents/edit-user/edit-user.component';
import { UsersComponent } from './shared/components/userComponents/users/users.component';
import { ExceptionPageComponent } from './shared/components/exceptionComponents/exception-page/exception-page.component';
import { ExceptionDetailPageComponent } from './shared/components/exceptionComponents/exception-detail-page/exception-detail-page.component';
import { DoctorsComponent } from './shared/components/userComponents/doctors/doctors.component';

import {MainAnimalComponent} from "./shared/components/animalComponents/main-animal/main-animal.component";

import {AboutComponent} from "./shared/about/about.component";


const appRoutes: Routes = [
  {
    path: '',
    component: ProceduresPageComponent
  },
  {
    path: 'procedures',
    component: ProceduresPageComponent
  },
  {
    path: 'specializations',
    component: SpecializationListComponent
  },
  {
    path: 'exceptions',
    component: ExceptionPageComponent
  },
  {
    path: 'exceptions/:id',
    component:  ExceptionDetailPageComponent
  },
{
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: UserProfileInfoComponent
  },
  {
    path: 'users/:id/edit',
    component: EditUserComponent
  },
  {
    path: 'doctors',
    component: DoctorsComponent
  },
  {
    path: 'animals',
    component: MainAnimalComponent
  },
  {
    path:'about',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    LayoutModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
