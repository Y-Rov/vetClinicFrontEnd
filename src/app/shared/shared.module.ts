import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProceduresPageComponent } from "./components/procedureComponents/procedures-page/procedures-page.component";
import { SpecializationListComponent } from './components/specialization-list/specialization-list.component';
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatButtonModule } from "@angular/material/button";
import { DeleteProcedureDialogComponent } from './components/procedureComponents/delete-procedure-dialog/delete-procedure-dialog.component';
import { NewProcedureDialogComponent } from './components/procedureComponents/new-procedure-dialog/new-procedure-dialog.component';
import { EditProcedureDialogComponent } from './components/procedureComponents/edit-procedure-dialog/edit-procedure-dialog.component';
import { MultiSelectComponent } from './components/procedureComponents/multi-select/multi-select.component';



@NgModule({
  declarations: [ProceduresPageComponent, SpecializationListComponent, DeleteProcedureDialogComponent, NewProcedureDialogComponent, EditProcedureDialogComponent, MultiSelectComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatAutocompleteModule, 
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule
  ],
  exports:[
    ProceduresPageComponent,
    SpecializationListComponent
  ]
})
export class SharedModule { }
