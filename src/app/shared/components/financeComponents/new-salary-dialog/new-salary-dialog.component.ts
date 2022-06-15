import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Salary } from '../../../../core/models/Salary';
import { SalaryService } from '../../../../core/services/financialService/salary.service';
import { SalaryPageComponent } from '../salary-page/salary-page.component';

@Component({
  selector: 'app-new-salary-dialog',
  templateUrl: './new-salary-dialog.component.html',
  styleUrls: ['./new-salary-dialog.component.sass']
})
export class NewSalaryDialogComponent implements OnInit {

  isSelectionChanged: boolean = false;

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<SalaryPageComponent>,
    private salaryService: SalaryService) {}


  form = new FormGroup({
    Value: new FormControl(0, Validators.min(1))
  });

  ngOnInit(): void {
  }

  onSaveForm(): void {
    const finalData: Salary = this.form.value as Salary;
    this.salaryService.addSalary(finalData).subscribe(() => this.dialogRef.close(true));
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  isButtonEnabled(): boolean {
    return this.form.valid && (this.form.dirty || this.isSelectionChanged);
  }
}
