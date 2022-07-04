import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FinStatementOneMonth } from '../../../../core/models/FinancialStatement/FinStatementOneMonth';
import { MyDate } from '../../../../core/models/FinancialStatement/MyDate';
import { FinancialStatementService } from '../../../../core/services/financialService/financial-statement.service';
import { FinancialStatementPageComponent } from '../financial-statement-page/financial-statement-page.component';

@Component({
  selector: 'app-financial-statement-result',
  templateUrl: './financial-statement-result.component.html',
  styleUrls: ['./financial-statement-result.component.sass'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class FinancialStatementResultComponent implements OnInit {

  dataSource: MatTableDataSource<FinStatementOneMonth> = new MatTableDataSource();
  displayedColumns = ['month', 'totalExpences', 'totalIncomes', 'incomesDetail', 'expencesDetail'];
  ExpandedExpences: any;
  ExpandedIncomes: any;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

    constructor(
    @Inject(MAT_DIALOG_DATA) private date: MyDate,
    private finService: FinancialStatementService,
      public dialogRef: MatDialogRef<FinancialStatementPageComponent>) {
}

  ngOnInit(): void {
    this.updateList();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }

  private updateList(): void {
    this.finService.getFinancialStatement(this.date).subscribe((data) => {
      this.dataSource.data = data;
    });
  }
  onClick(): void {
    console.log("click");
  }
}
