import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-deletion-dialog',
  templateUrl: './confirm-deletion-dialog.component.html',
  styleUrls: ['./confirm-deletion-dialog.component.sass']
})
export class ConfirmDeletionDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: string,
    private dialogRef: MatDialogRef<ConfirmDeletionDialogComponent>
  ) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
