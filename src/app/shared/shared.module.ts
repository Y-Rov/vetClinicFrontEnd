import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { ExceptionDetailPageComponent } from './components/exceptionComponents/exception-detail-page/exception-detail-page.component';
import { ExceptionPageComponent } from './components/exceptionComponents/exception-page/exception-page.component';
import { ExceptionStatsPageComponent } from './components/exceptionComponents/exception-stats-page/exception-stats-page.component';
import { ExceptionTodayPageComponent } from './components/exceptionComponents/exception-today-page/exception-today-page.component';
import { ExceptionTodayStatsPageComponent } from './components/exceptionComponents/exception-today-stats-page/exception-today-stats-page.component';
import { DeleteSalaryDialogComponent } from './components/financeComponents/delete-salary-dialog/delete-salary-dialog.component';
import { EditSalaryDialogComponent } from './components/financeComponents/edit-salary-dialog/edit-salary-dialog.component';
import { NewSalaryDialogComponent } from './components/financeComponents/new-salary-dialog/new-salary-dialog.component';
import { SalaryPageComponent } from './components/financeComponents/salary-page/salary-page.component';
import { DeleteProcedureDialogComponent } from './components/procedureComponents/delete-procedure-dialog/delete-procedure-dialog.component';
import { EditProcedureDialogComponent } from './components/procedureComponents/edit-procedure-dialog/edit-procedure-dialog.component';
import { MultiSelectComponent } from './components/procedureComponents/multi-select/multi-select.component';
import { NewProcedureDialogComponent } from './components/procedureComponents/new-procedure-dialog/new-procedure-dialog.component';
import { ProceduresPageComponent } from "./components/procedureComponents/procedures-page/procedures-page.component";
import { SpecializationListComponent } from './components/specialization-list/specialization-list.component';
import { DeleteUserComponent } from './components/userComponents/delete-user/delete-user.component';
import { EditUserComponent } from './components/userComponents/edit-user/edit-user.component';
import { UserProfileInfoComponent } from './components/userComponents/user-profile-info/user-profile-info.component';
import { UsersComponent } from './components/userComponents/users/users.component';



@NgModule({

  declarations: [
    ProceduresPageComponent, 
    SpecializationListComponent, 
    DeleteProcedureDialogComponent, 
    NewProcedureDialogComponent, 
    EditProcedureDialogComponent, 
    MultiSelectComponent,
    UsersComponent,
    UserProfileInfoComponent,
    EditUserComponent,
    DeleteUserComponent,
    ExceptionPageComponent,
    ExceptionDetailPageComponent,
    ExceptionStatsPageComponent,
    ExceptionTodayStatsPageComponent,
    ExceptionTodayPageComponent,
    SalaryPageComponent,
    EditSalaryDialogComponent,
    DeleteSalaryDialogComponent,
    NewSalaryDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatTabsModule,
    MatNativeDateModule,
    MatAutocompleteModule, 
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  exports: [
    ProceduresPageComponent,
    SpecializationListComponent,
    ExceptionPageComponent,
    ExceptionDetailPageComponent,
    ExceptionStatsPageComponent,
    ExceptionTodayStatsPageComponent,
    UsersComponent,
    UserProfileInfoComponent,
    EditUserComponent,
    DeleteUserComponent,
    SalaryPageComponent,
    EditSalaryDialogComponent,
    DeleteSalaryDialogComponent,
    NewSalaryDialogComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class SharedModule { }
