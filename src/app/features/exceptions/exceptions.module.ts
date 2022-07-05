import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../shared/shared.module";
import { MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSortModule} from "@angular/material/sort";
import { ExceptionsRoutingModule } from './exceptions-routing.module';

import { ExceptionPageComponent } from './components/exception-page/exception-page.component';
import { ExceptionStatsPageComponent } from './components/exception-stats-page/exception-stats-page.component';
import { ExceptionTodayPageComponent } from './components/exception-today-page/exception-today-page.component';
import { ExceptionTodayStatsPageComponent } from './components/exception-today-stats-page/exception-today-stats-page.component';
import { ExceptionDetailPageComponent } from './components/exception-detail-page/exception-detail-page.component';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    ExceptionPageComponent,
    ExceptionStatsPageComponent,
    ExceptionTodayPageComponent,
    ExceptionTodayStatsPageComponent,
    ExceptionDetailPageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    SharedModule,
    MatTableModule,
    MatTooltipModule,
    MatSortModule,
    ExceptionsRoutingModule,
    MatTabsModule

  ]
})
export class ExceptionsModule { }