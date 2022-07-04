import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
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

  today: Date = new Date();

  startChange: boolean = false;
  endChange: boolean = false;

  @Output()
  public monthAndYearChange = new EventEmitter<Date | null>();

  public emitDateChange(event: MatDatepickerInputEvent<Date | null, unknown>): void {
    this.monthAndYearChange.emit(event.value);
  }

  public monthChangedStart(value: any, widget: any): void {
    this.date.startDate = value;
    this.startChange = true;
    widget.close();
  }
  public monthChangedEnd(value: any, widget: any): void {
    this.date.endDate = value;
    this.endChange = true;
    widget.close();
  }

  constructor(
    private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  isEnable(): boolean {
    if (this.startChange && this.endChange) {
      return true;
    }
    return false;
  }

  onGenerateButton(){
    if (this.isEnable()) {

    this.Generate(this.date)    
    }
  }
  Generate(date: MyDate) {
    const dialogRef = this.matDialog.open(FinancialStatementResultComponent, {
      autoFocus: false,
      data: date
    });
  }
}
