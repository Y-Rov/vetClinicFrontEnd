import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProceduresPageComponent } from "./components/procedureComponents/procedures-page/procedures-page.component";
import { SpecializationListComponent } from './components/specialization-list/specialization-list.component';
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";
import { ExceptionPageComponent } from './components/exceptionComponents/exception-page/exception-page.component';
import { ExceptionDetailPageComponent } from './components/exceptionComponents/exception-detail-page/exception-detail-page.component';
import { ExceptionStatsPageComponent } from './components/exceptionComponents/exception-stats-page/exception-stats-page.component';
import { ExceptionTodayStatsPageComponent } from './components/exceptionComponents/exception-today-stats-page/exception-today-stats-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input'   
import { ExceptionTodayPageComponent } from './components/exceptionComponents/exception-today-page/exception-today-page.component';

@NgModule({
  declarations: [ProceduresPageComponent, SpecializationListComponent,
    ExceptionPageComponent, ExceptionDetailPageComponent,
    ExceptionStatsPageComponent, ExceptionTodayStatsPageComponent,ExceptionTodayPageComponent],
    
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    ProceduresPageComponent,
    SpecializationListComponent,
    ExceptionPageComponent,
    ExceptionDetailPageComponent,
    ExceptionStatsPageComponent,
    ExceptionTodayStatsPageComponent
  ]
})
export class SharedModule { }
