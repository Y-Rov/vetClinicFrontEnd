import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MyDate } from '../../../../core/models/FinancialStatement/MyDate';
import { FinancialStatementResultComponent } from '../financial-statement-result/financial-statement-result.component';

@Component({
  selector: 'app-financial-statement-page',
  templateUrl: './financial-statement-page.component.html',
  styleUrls: ['./financial-statement-page.component.sass']
})
export class FinancialStatementPageComponent implements OnInit {
  date: MyDate = new MyDate;
  range = new FormGroup({
    start: new FormControl<Date|null>(null),
    end: new FormControl<Date|null>(null),
  });

  constructor(
    private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  IsEnable(): boolean {
    if (this.range.value.start?.getDate != null &&
      this.range.value.end?.getDate) {
      return true;
    }
    return false;
  }

  onGenerateButton(){
    if (this.range.value.start?.getDate != null &&
      this.range.value.end?.getDate) {

      this.date.startDate = this.range.value.start;
      this.date.endDate = this.range.value.end;
    }
    this.Generate(this.date)
  }
  Generate(date: MyDate) {
    const dialogRef = this.matDialog.open(FinancialStatementResultComponent, {
      autoFocus: false,
      data: date
    });
  }
}
