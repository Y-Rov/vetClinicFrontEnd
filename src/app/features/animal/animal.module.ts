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

import {MainAnimalComponent} from "./components/main-animal/main-animal.component";
import {AddAnimalComponent} from "./components/add-animal/add-animal.component";
import {DeleteAnimalComponent} from "./components/delete-animal/delete-animal.component";
import {EditAnimalComponent} from "./components/edit-animal/edit-animal.component";
import {AnimalMedcardComponent} from "./components/animal-medcard/animal-medcard.component";
import {AnimalsRoutingModule} from "./animals-routing.module";


@NgModule({
    declarations: [
        MainAnimalComponent,
        AddAnimalComponent,
        DeleteAnimalComponent,
        EditAnimalComponent,
        AnimalMedcardComponent
    ],
    exports: [
        MainAnimalComponent
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
        AnimalsRoutingModule
    ]
})
export class AnimalModule { }
