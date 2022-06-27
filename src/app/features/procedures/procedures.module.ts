import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../shared/shared.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSortModule} from "@angular/material/sort";

import { ProceduresPageComponent } from './components/procedures-page/procedures-page.component';
import { NewProcedureDialogComponent } from './components/new-procedure-dialog/new-procedure-dialog.component';
import { EditProcedureDialogComponent } from './components/edit-procedure-dialog/edit-procedure-dialog.component';
import { DeleteProcedureDialogComponent } from './components/delete-procedure-dialog/delete-procedure-dialog.component';
import { ProceduresRoutingModule } from "./procedures-routing.module";

@NgModule({
  declarations: [
    ProceduresPageComponent,
    NewProcedureDialogComponent,
    EditProcedureDialogComponent,
    DeleteProcedureDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    SharedModule,
    MatPaginatorModule,
    MatTableModule,
    MatTooltipModule,
    MatSortModule,
    ProceduresRoutingModule
  ]
})
export class ProceduresModule { }
