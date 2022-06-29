import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { SalariesRoutingModule } from './salaries-routing.module';
import { SalaryPageComponent } from './components/salary-page/salary-page.component';
import { DeleteSalaryDialogComponent } from './components/delete-salary-dialog/delete-salary-dialog.component';
import { EditSalaryDialogComponent } from './components/edit-salary-dialog/edit-salary-dialog.component';
import { NewSalaryDialogComponent } from './components/new-salary-dialog/new-salary-dialog.component';


@NgModule({
  declarations: [
    SalaryPageComponent,
    DeleteSalaryDialogComponent,
    EditSalaryDialogComponent,
    NewSalaryDialogComponent
  ],
  imports: [
    CommonModule,
    SalariesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SalariesModule { }
