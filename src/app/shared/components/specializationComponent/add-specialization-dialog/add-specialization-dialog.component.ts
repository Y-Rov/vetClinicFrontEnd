import {Component, Inject, OnInit} from '@angular/core';
import {Procedure} from "../../../../core/models/Procedure";
import {FormBuilder} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {SpecializationListComponent} from "../specialization-list/specialization-list.component";

@Component({
  selector: 'app-add-specialization-dialog',
  templateUrl: './add-specialization-dialog.component.html',
  styleUrls: ['./add-specialization-dialog.component.sass']
})
export class AddSpecializationDialogComponent implements OnInit {

  procedures: Procedure[] = [];
  selectedProcedures: Procedure[] = [];
  isSelectionChanged: boolean = false;

  constructor(@Inject(FormBuilder) private  formBuilder: FormBuilder,
              dialogRef: MatDialogRef<SpecializationListComponent>) { }

  ngOnInit(): void {
  }

}
