import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from "./layout/layout.module";
import { SharedModule } from "./shared/shared.module";

import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { LoginComponent } from './shared/components/authComponents/login-page/login.component';
import { SignupComponent } from './shared/components/authComponents/signup-page/signup.component';
import { UnauthGuard } from './helpers/unauth-guard/unauth.guard';

import {AboutComponent} from "./layout/about/about.component";
import {HomeComponent} from "./layout/home/home.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: 'specializations',
  //   component: SpecializationListComponent,
  //   canActivate: [RolesGuard],
  //   data: {allowedRoles: ['Admin']}
  // },
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
    path: 'about',
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
    SharedModule
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
export class AppModule {}
