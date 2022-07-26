import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteEmailDialogComponent } from './write-email-dialog/write-email-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { MailingWriteComponent } from './mailing-write/mailing-write.component';
import {MatCardModule} from "@angular/material/card";
import {AngularEditorModule} from "@kolkov/angular-editor";


@NgModule({
  declarations: [
    WriteEmailDialogComponent,
    MailingWriteComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    AngularEditorModule,
    FormsModule
  ]
})
export class EmailModule { }
