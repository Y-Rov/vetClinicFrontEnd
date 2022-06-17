import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProcedureService } from '../../../../core/services/procedureService/procedure.service';
import { ProceduresPageComponent } from '../procedures-page/procedures-page.component';

@Component({
  selector: 'app-delete-procedure-dialog',
  templateUrl: './delete-procedure-dialog.component.html',
  styleUrls: ['./delete-procedure-dialog.component.sass']
})
export class DeleteProcedureDialogComponent implements OnInit {

  id: number;
  name: string

  constructor(
    @Inject(MAT_DIALOG_DATA) private data : {id: number, name: string},
    public dialogRef: MatDialogRef<ProceduresPageComponent>,
    private procedureService : ProcedureService) {
    this.id = data.id;
    this.name = data.name;
   }

  ngOnInit(): void {
  }

  onDeleteProcedure(): void{
    this.procedureService.deleteProcedureById(this.id).subscribe(() => this.dialogRef.close(true));
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
