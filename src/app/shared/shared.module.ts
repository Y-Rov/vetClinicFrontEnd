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
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { LoginComponent } from './components/authComponents/login-page/login.component';
import { SignupComponent } from './components/authComponents/signup-page/signup.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { NullValueDirective } from './directives/null-value.directive';

@NgModule({
  declarations: [
    MultiSelectComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    HomeComponent,
    NullValueDirective
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
    HomeComponent,
    MultiSelectComponent,
    NullValueDirective
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class SharedModule {}
