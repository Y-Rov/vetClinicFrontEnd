import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProceduresPageComponent} from "./components/procedureComponents/procedures-page/procedures-page.component";
import { SpecializationListComponent } from './components/specialization-list/specialization-list.component';
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [ProceduresPageComponent, SpecializationListComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule
  ],
  exports:[
    ProceduresPageComponent,
    SpecializationListComponent
  ]
})
export class SharedModule { }
