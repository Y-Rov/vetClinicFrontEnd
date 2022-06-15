import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalaryService } from '../../../../core/services/financialService/salary.service';
import { SalaryPageComponent } from '../salary-page/salary-page.component';

@Component({
  selector: 'app-delete-salary-dialog',
  templateUrl: './delete-salary-dialog.component.html',
  styleUrls: ['./delete-salary-dialog.component.sass']
})
export class DeleteSalaryDialogComponent implements OnInit {

  id: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { id: number },
    public dialogRef: MatDialogRef<SalaryPageComponent>,
    private salaryService: SalaryService)
  {
    this.id = data.id;
  }

  ngOnInit(): void {
  }

  onDeleteSalary(): void {
    this.salaryService.deleteSalaryById(this.id).subscribe(() => this.dialogRef.close(true));
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

}
