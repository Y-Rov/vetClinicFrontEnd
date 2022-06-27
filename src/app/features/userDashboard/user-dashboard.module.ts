import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTabsModule} from "@angular/material/tabs";

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';

import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [
    CreateEmployeeComponent,
    DeleteUserComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatTabsModule
  ]
})
export class UserDashboardModule { }
