import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../../../../core/models/Employees';
import { Salary } from '../../../../core/models/Salary';
import { SalaryService } from '../../../../core/services/financialService/salary.service';
import { SalaryPageComponent } from '../salary-page/salary-page.component';


@Component({
  selector: 'app-new-salary-dialog',
  templateUrl: './new-salary-dialog.component.html',
  styleUrls: ['./new-salary-dialog.component.sass']
})
export class NewSalaryDialogComponent implements OnInit {

  employeeList$!: Employee[];
  isSelectionChanged: boolean = false;

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<SalaryPageComponent>,
    private salaryService: SalaryService) {
    this.UpdateList();
  }


  form = new FormGroup({
    value: new FormControl(0, Validators.min(1))
  });

  ngOnInit(): void {
    this.UpdateList();
  }
  public UpdateList(): void {
    this.salaryService.getEmployee().subscribe((data) => {
      this.employeeList$ = data;
    });
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
