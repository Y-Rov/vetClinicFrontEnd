import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    SalariesRoutingModule
  ]
})
export class SalariesModule { }
