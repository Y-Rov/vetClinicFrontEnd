import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from "@angular/material/expansion";
import { ExceptionPageComponent } from './components/exceptionComponents/exception-page/exception-page.component';
import { ExceptionDetailPageComponent } from './components/exceptionComponents/exception-detail-page/exception-detail-page.component';
import { ExceptionStatsPageComponent } from './components/exceptionComponents/exception-stats-page/exception-stats-page.component';
import { ExceptionTodayStatsPageComponent } from './components/exceptionComponents/exception-today-stats-page/exception-today-stats-page.component';
import { ExceptionTodayPageComponent } from './components/exceptionComponents/exception-today-page/exception-today-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { ProceduresPageComponent } from "./components/procedureComponents/procedures-page/procedures-page.component";
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DeleteProcedureDialogComponent } from './components/procedureComponents/delete-procedure-dialog/delete-procedure-dialog.component';
import { NewProcedureDialogComponent } from './components/procedureComponents/new-procedure-dialog/new-procedure-dialog.component';
import { EditProcedureDialogComponent } from './components/procedureComponents/edit-procedure-dialog/edit-procedure-dialog.component';
import { MultiSelectComponent } from './components/procedureComponents/multi-select/multi-select.component';
import { LoginComponent } from './components/authComponents/login-page/login.component';
import { SignupComponent } from './components/authComponents/signup-page/signup.component';
import { MatSelectModule } from '@angular/material/select';
import { AboutComponent } from './about/about.component';
import { AddAnimalComponent } from './components/animalComponents/add-animal/add-animal.component';
import { EditAnimalComponent } from './components/animalComponents/edit-animal/edit-animal.component';
import { DeleteAnimalComponent } from './components/animalComponents/delete-animal/delete-animal.component';
import { MainAnimalComponent } from './components/animalComponents/main-animal/main-animal.component';
import { HomeComponent } from './home/home.component';
import { AnimalMedcardComponent } from './components/animalComponents/animal-medcard/animal-medcard.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {
  SpecializationListComponent
} from "./components/specializationComponent/specialization-list/specialization-list.component";
import {
  SpecializationAddProcedureComponent
} from "./components/specializationComponent/specialization-add-procedure/specialization-add-procedure.component";
import {
  SpecializationAddUserDialogComponent
} from "./components/specializationComponent/specialization-add-user-dialog/specialization-add-user-dialog.component";
import {
  SpecializationDeleteDialogComponent
} from "./components/specializationComponent/specialization-delete-dialog/specialization-delete-dialog.component";
import {
  SpecializationEditDialogComponent
} from "./components/specializationComponent/specialization-edit-dialog/specialization-edit-dialog.component";
import {SalaryPageComponent} from "./components/financeComponents/salary-page/salary-page.component";
import {NewSalaryDialogComponent} from "./components/financeComponents/new-salary-dialog/new-salary-dialog.component";
import {
  DeleteSalaryDialogComponent
} from "./components/financeComponents/delete-salary-dialog/delete-salary-dialog.component";
import {
  EditSalaryDialogComponent
} from "./components/financeComponents/edit-salary-dialog/edit-salary-dialog.component";
import {
  AddSpecializationDialogComponent
} from "./components/specializationComponent/add-specialization-dialog/add-specialization-dialog.component";

@NgModule({

  declarations: [
    ProceduresPageComponent,
    SpecializationListComponent,
    SpecializationAddProcedureComponent,
    SpecializationAddUserDialogComponent,
    SpecializationDeleteDialogComponent,
    SpecializationEditDialogComponent,
    AddSpecializationDialogComponent,
    SalaryPageComponent,
    DeleteSalaryDialogComponent,
    EditSalaryDialogComponent,
    NewSalaryDialogComponent,
    DeleteProcedureDialogComponent,
    NewProcedureDialogComponent,
    EditProcedureDialogComponent,
    MultiSelectComponent,
    ExceptionPageComponent, ExceptionDetailPageComponent,
    LoginComponent, SignupComponent,
    ExceptionStatsPageComponent,
    ExceptionTodayStatsPageComponent,
    ExceptionTodayPageComponent,
    ExceptionPageComponent,
    ExceptionDetailPageComponent,
    ExceptionStatsPageComponent,
    ExceptionTodayStatsPageComponent,
    ExceptionTodayPageComponent,
    AddAnimalComponent,
    EditAnimalComponent,
    DeleteAnimalComponent,
    MainAnimalComponent,

    AnimalMedcardComponent,

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
    MatTooltipModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ProceduresPageComponent,
    SpecializationListComponent,
    ExceptionPageComponent,
    ExceptionDetailPageComponent,
    ExceptionStatsPageComponent,
    ExceptionTodayStatsPageComponent,
    MainAnimalComponent,
    HomeComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class SharedModule {}
