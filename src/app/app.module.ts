import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProceduresPageComponent } from './shared/components/procedureComponents/procedures-page/procedures-page.component';
import {LayoutModule} from "./layout/layout.module";
import {SharedModule} from "./shared/shared.module";
import {SpecializationListComponent} from "./shared/components/specialization-list/specialization-list.component";

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
    path:'specializations',
    component: SpecializationListComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
