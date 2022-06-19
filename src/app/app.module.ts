import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { RolesGuard } from './helpers/roles-guard/roles.guard';
import { AuthGuard } from './helpers/auth-guard/auth.guard';
import { LoginComponent } from './shared/components/authComponents/login-page/login.component';
import { SignupComponent } from './shared/components/authComponents/signup-page/signup.component';
import { UnauthGuard } from './helpers/unauth-guard/unauth.guard';
import { DoctorsComponent } from './shared/components/userComponents/doctors/doctors.component';

import {MainAnimalComponent} from "./shared/components/animalComponents/main-animal/main-animal.component";

import {AboutComponent} from "./shared/about/about.component";
import {HomeComponent} from "./shared/home/home.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'procedures',
    component: ProceduresPageComponent,
  },
  {
    path: 'specializations',
    component: SpecializationListComponent,
    canActivate: [RolesGuard],
    data: {allowedRoles: ['Admin']}
  },
  {
    path: 'exceptions',
    component: ExceptionPageComponent,
    canActivate: [RolesGuard],
    data: {allowedRoles: ['Admin']}
  },
  {
    path: 'exceptions/:id',
    component:  ExceptionDetailPageComponent,
    canActivate: [RolesGuard],
    data: {allowedRoles: ['Admin']}
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [RolesGuard],
    data: {allowedRoles: ['Admin']}
  },
  {
    path: 'users/:id',
    component: UserProfileInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users/:id/edit',
    component: EditUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth/login',
    component: LoginComponent,
    canActivate: [UnauthGuard]
  },
  {
    path: 'auth/signup',
    component: SignupComponent,
    canActivate: [UnauthGuard]
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
