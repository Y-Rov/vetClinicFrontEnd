import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { MatExpansionModule } from "@angular/material/expansion";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../shared/shared.module";

import { MatSelectModule } from '@angular/material/select';


import { AppointmentsRoutingModule } from './appointments-routing.module';
import{AppointmentsPageComponent} from './components/appointments-page/appointments-page.component';
import { DeleteAppointmentDialogComponent } from './components/delete-appointment-dialog/delete-appointment-dialog.component';
import { EditAppointmentDialogComponent } from './components/edit-appointment-dialog/edit-appointment-dialog.component';
import { NewAppointmentDialogComponent } from './components/new-appointment-dialog/new-appointment-dialog.component';

@NgModule({
  declarations: [
    AppointmentsPageComponent,
    DeleteAppointmentDialogComponent,
    EditAppointmentDialogComponent,
    NewAppointmentDialogComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatIconModule,
    MatSelectModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AppointmentsModule { }
