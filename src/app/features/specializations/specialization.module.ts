import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpecializationListComponent} from "./components/specialization-list/specialization-list.component";
import { AddSpecializationDialogComponent } from "./components/add-specialization-dialog/add-specialization-dialog.component";
import {
  SpecializationEditDialogComponent
} from "./components/specialization-edit-dialog/specialization-edit-dialog.component";
import {
  SpecializationDeleteDialogComponent
} from "./components/specialization-delete-dialog/specialization-delete-dialog.component";
import {
  SpecializationAddProcedureComponent
} from "./components/specialization-add-procedure/specialization-add-procedure.component";
import {
  SpecializationAddUserDialogComponent
} from "./components/specialization-add-user-dialog/specialization-add-user-dialog.component";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {SharedModule} from "../../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {SpecializationRoutingModule} from "./specialization-routing-module";

@NgModule({
  declarations: [
    SpecializationListComponent,
    AddSpecializationDialogComponent,
    SpecializationEditDialogComponent,
    SpecializationDeleteDialogComponent,
    SpecializationAddProcedureComponent,
    SpecializationAddUserDialogComponent
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
    MatExpansionModule,
    SpecializationRoutingModule
  ]
})
export class SpecializationModule { }
