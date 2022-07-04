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
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

// import { AppointmentsPageComponent } from './components/appointmentComponents/appointments-page/appointments-page.component';
// import { DeleteAppointmentDialogComponent } from './components/appointmentComponents/delete-appointment-dialog/delete-appointment-dialog.component';
// import { EditAppointmentDialogComponent } from './components/appointmentComponents/edit-appointment-dialog/edit-appointment-dialog.component';
// import { NewAppointmentDialogComponent } from './components/appointmentComponents/new-appointment-dialog/new-appointment-dialog.component';

import { MultiSelectComponent } from './components/multi-select/multi-select.component';

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
import {
  AddSpecializationDialogComponent
} from "./components/specializationComponent/add-specialization-dialog/add-specialization-dialog.component";


// import { AppointmentsPageComponent } from '../features/appointments/components/appointments-page/appointments-page.component';
// import { DeleteAppointmentDialogComponent } from '../features/appointments/components/delete-appointment-dialog/delete-appointment-dialog.component';
// import { EditAppointmentDialogComponent } from '../features/appointments/components/edit-appointment-dialog/edit-appointment-dialog.component';
// import { NewAppointmentDialogComponent } from '../features/appointments/components/new-appointment-dialog/new-appointment-dialog.component';

@NgModule({

  declarations: [
    SpecializationListComponent,
    SpecializationAddProcedureComponent,
    SpecializationAddUserDialogComponent,
    SpecializationDeleteDialogComponent,
    SpecializationEditDialogComponent,
    AddSpecializationDialogComponent,
    MultiSelectComponent,
    // AppointmentsPageComponent, 
    // DeleteAppointmentDialogComponent, 
    // EditAppointmentDialogComponent, 
    // NewAppointmentDialogComponent,
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
        SpecializationListComponent,
        ExceptionPageComponent,
        ExceptionDetailPageComponent,
        ExceptionStatsPageComponent,
        ExceptionTodayStatsPageComponent,
        // AppointmentsPageComponent,
        // DeleteAppointmentDialogComponent,
        // EditAppointmentDialogComponent,
        // NewAppointmentDialogComponent,
        MainAnimalComponent,
        HomeComponent,
        MultiSelectComponent
    ],

  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class SharedModule {}
