import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";
import { ExceptionPageComponent } from './components/exceptionComponents/exception-page/exception-page.component';
import { ExceptionDetailPageComponent } from './components/exceptionComponents/exception-detail-page/exception-detail-page.component';
import { ExceptionStatsPageComponent } from './components/exceptionComponents/exception-stats-page/exception-stats-page.component';
import { ExceptionTodayStatsPageComponent } from './components/exceptionComponents/exception-today-stats-page/exception-today-stats-page.component';
import { ExceptionTodayPageComponent } from './components/exceptionComponents/exception-today-page/exception-today-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { ProceduresPageComponent } from "./components/procedureComponents/procedures-page/procedures-page.component";
import { SpecializationListComponent } from './components/specialization-list/specialization-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UsersComponent } from './components/userComponents/users/users.component';
import { UserProfileInfoComponent } from './components/userComponents/user-profile-info/user-profile-info.component';
import { EditUserComponent } from './components/userComponents/edit-user/edit-user.component';
import { DeleteUserComponent } from './components/userComponents/delete-user/delete-user.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DeleteProcedureDialogComponent } from './components/procedureComponents/delete-procedure-dialog/delete-procedure-dialog.component';
import { NewProcedureDialogComponent } from './components/procedureComponents/new-procedure-dialog/new-procedure-dialog.component';
import { EditProcedureDialogComponent } from './components/procedureComponents/edit-procedure-dialog/edit-procedure-dialog.component';
import { MultiSelectComponent } from './components/procedureComponents/multi-select/multi-select.component';
import { EditAddressComponent } from './components/userComponents/edit-user/edit-address/edit-address.component';
import { CreateEmployeeComponent } from './components/userComponents/create-employee/create-employee.component';
import { MatSelectModule } from '@angular/material/select';

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
    EditAddressComponent,
    CreateEmployeeComponent,
    ExceptionPageComponent, 
    ExceptionDetailPageComponent,
    ExceptionStatsPageComponent, 
    ExceptionTodayStatsPageComponent,
    ExceptionTodayPageComponent
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
    EditAddressComponent,
    CreateEmployeeComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class SharedModule { }
