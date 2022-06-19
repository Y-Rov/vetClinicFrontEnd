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
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AboutComponent } from './about/about.component';
import { AddAnimalComponent } from './components/animalComponents/add-animal/add-animal.component';
import { DeleteAnimalComponent } from './components/animalComponents/delete-animal/delete-animal.component';
import { EditAnimalComponent } from './components/animalComponents/edit-animal/edit-animal.component';
import { MainAnimalComponent } from './components/animalComponents/main-animal/main-animal.component';
import { LoginComponent } from './components/authComponents/login-page/login.component';
import { SignupComponent } from './components/authComponents/signup-page/signup.component';
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
import { CreateEmployeeComponent } from './components/userComponents/create-employee/create-employee.component';
import { DeleteUserComponent } from './components/userComponents/delete-user/delete-user.component';
import { DoctorsComponent } from './components/userComponents/doctors/doctors.component';
import { EditAddressComponent } from './components/userComponents/edit-user/edit-address/edit-address.component';
import { EditUserComponent } from './components/userComponents/edit-user/edit-user.component';
import { UserProfileInfoComponent } from './components/userComponents/user-profile-info/user-profile-info.component';
import { UsersComponent } from './components/userComponents/users/users.component';
import { HomeComponent } from './home/home.component';

//import { AnimalMedcardComponent } from './components/animalComponents/animal-medcard/animal-medcard.component';

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
    ExceptionDetailPageComponent,
    ExceptionStatsPageComponent,
    ExceptionTodayStatsPageComponent,
    ExceptionTodayPageComponent,
    SalaryPageComponent,
    EditSalaryDialogComponent,
    DeleteSalaryDialogComponent,
    NewSalaryDialogComponent,
    ExceptionDetailPageComponent,
    LoginComponent,
    SignupComponent,
    ExceptionStatsPageComponent,
    ExceptionTodayStatsPageComponent,
    ExceptionTodayPageComponent,
    EditAddressComponent,
    CreateEmployeeComponent,
    ExceptionPageComponent,
    ExceptionDetailPageComponent,
    ExceptionStatsPageComponent,
    ExceptionTodayStatsPageComponent,
    ExceptionTodayPageComponent,
    DoctorsComponent,
    AddAnimalComponent,
    EditAnimalComponent,
    DeleteAnimalComponent,
    MainAnimalComponent,

    //AnimalMedcardComponent

    AboutComponent,
    HomeComponent
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
    MatSelectModule,
    MatSelectModule,
    MatTooltipModule,
    NgbModule
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
    NewSalaryDialogComponent,
    EditAddressComponent,
    CreateEmployeeComponent,
    MainAnimalComponent,
    HomeComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class SharedModule { }
