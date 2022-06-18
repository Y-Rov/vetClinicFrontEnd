import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SpecializationListComponent} from "../specialization-list/specialization-list.component";
import {SpecializationService} from "../../../../core/services/specializationService/specialization.service";

@Component({
  selector: 'app-specialization-delete-dialog',
  templateUrl: './specialization-delete-dialog.component.html',
  styleUrls: ['./specialization-delete-dialog.component.sass']
})
export class SpecializationDeleteDialogComponent implements OnInit {
  id: number;
  name: string;

  constructor(@Inject(MAT_DIALOG_DATA) private data : {id: number, name: string},
              public dialogRef: MatDialogRef<SpecializationListComponent>,
              private specializationService : SpecializationService) {
    this.id = data.id;
    this.name = data.name;
  }

  onDelete(): void{
    this.specializationService.deleteById(this.id)
      .subscribe(() => this.dialogRef.close(true));
  }

  onCancelClick() : void{
    this.dialogRef.close(false);
  }

  ngOnInit(): void {
  }
}
