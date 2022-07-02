import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Expences } from '../../../../core/models/FinancialStatement/Expences';
import { FinancialStatement } from '../../../../core/models/FinancialStatement/FinancialStatement';
import { FinStatementOneMonth } from '../../../../core/models/FinancialStatement/FinStatementOneMonth';
import { MyDate } from '../../../../core/models/FinancialStatement/MyDate';
import { FinancialStatementService } from '../../../../core/services/financialService/financial-statement.service';
import { FinancialStatementPageComponent } from '../financial-statement-page/financial-statement-page.component';

@Component({
  selector: 'app-financial-statement-result',
  templateUrl: './financial-statement-result.component.html',
  styleUrls: ['./financial-statement-result.component.sass']
})
export class FinancialStatementResultComponent implements OnInit {

  dataSource: MatTableDataSource<FinStatementOneMonth> = new MatTableDataSource();
  displayedColumns = ['month', 'totalExpences', 'totalIncomes'];

    constructor(
    @Inject(MAT_DIALOG_DATA) private date: MyDate,
    private finService: FinancialStatementService,
      public dialogRef: MatDialogRef<FinancialStatementPageComponent>) {
      this.updateList();
}

  ngOnInit(): void {
    this.updateList();
  }
  private updateList(): void {
    this.finService.getFinancialStatement(this.date).subscribe((data) => {
      this.dataSource.data = data;
    });
  }
}
