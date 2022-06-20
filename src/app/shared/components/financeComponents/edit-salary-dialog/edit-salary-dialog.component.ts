import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Salary } from '../../../../core/models/Salary';
import { SalaryService } from '../../../../core/services/financialService/salary.service';
import { SalaryPageComponent } from '../salary-page/salary-page.component';

@Component({
  selector: 'app-edit-salary-dialog',
  templateUrl: './edit-salary-dialog.component.html',
  styleUrls: ['./edit-salary-dialog.component.sass']
})
export class EditSalaryDialogComponent implements OnInit {

  isSelectionChanged: boolean = false;

  constructor(
    @Inject(FormBuilder) private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Salary,
    public dialogRef: MatDialogRef<SalaryPageComponent>,
    private salaryService: SalaryService) {
  }

  form = new FormGroup({
    value: new FormControl(0, Validators.min(1))
  });

  ngOnInit(): void {
    this.form.patchValue(this.data);
  }

  onSaveForm(): void {
    if (!this.form.valid) {
      return;
    }
    if (!(this.form.dirty || this.isSelectionChanged)) {
      this.dialogRef.close(false);
    }
      this.data.value = this.form.value.value!;
    this.salaryService.updateSalary(this.data).subscribe(() => this.dialogRef.close(true));
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }


  isButtonEnabled(): boolean {
    return this.form.valid && (this.form.dirty || this.isSelectionChanged);
  }
}
