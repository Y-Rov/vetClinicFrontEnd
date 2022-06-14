import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";
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
import { UsersComponent } from './components/userComponents/users/users.component';
import { EditUserComponent } from './components/userComponents/edit-user/edit-user.component';
import { UserProfileInfoComponent } from './components/userComponents/user-profile-info/user-profile-info.component';
import { DeleteUserComponent } from './components/userComponents/delete-user/delete-user.component';

@NgModule({
  declarations: [
    ProceduresPageComponent, 
    SpecializationListComponent,
    UsersComponent,
    UserProfileInfoComponent,
    EditUserComponent,
    DeleteUserComponent
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
    MatPaginatorModule,
    MatTableModule,
    MatDatepickerModule,
    MatTabsModule,
    MatDialogModule,
    MatNativeDateModule,
    MatInputModule,
    MatSortModule
  ],
  exports:[
    ProceduresPageComponent,
    SpecializationListComponent,
    UsersComponent,
    UserProfileInfoComponent,
    EditUserComponent,
    DeleteUserComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class SharedModule { }
