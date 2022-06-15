import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Salary } from '../../../../core/models/Salary';
import { SalaryService } from '../../../../core/services/financialService/salary.service'; 

@Component({
  selector: 'app-salary-page',
  templateUrl: './salary-page.component.html',
  styleUrls: ['./salary-page.component.sass']
})
export class SalaryPageComponent implements OnInit {

  dataSource: MatTableDataSource<Salary> = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'cost', 'description', 'duration', 'delete', 'edit'];

  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(
    private salaryService: SalaryService,
    private matDialog: MatDialog) {
    this.updateList();
  }

  private updateList(): void {
    this.salaryService.getProcedures().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.sort = this.sort!;
    });
  }

  ngOnInit(): void {
    this.updateList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }

  onDeleteSalary(element: any) {
    const salary: Salary = element as Salary;

    const dialogRef = this.matDialog.open(DeleteSalaryDialogComponent, {
      autoFocus: false,
      data: {
        id: salary.EmloyeeId
      }
    });

    dialogRef.afterClosed().subscribe((reuireReload: boolean) => { if (reuireReload) this.updateList() });
  }

  onEditSalary(element: any) {
    const salary: Salary = element as Salary;
    const dialogRef = this.matDialog.open(EditSalaryDialogComponent, {
      data: salary
    });

    dialogRef.afterClosed().subscribe((reuireReload: boolean) => { if (reuireReload) this.updateList() });
  }

  onNewProcedure() {
    const dialogRef = this.matDialog.open(NewSalaryDialogComponent);

    dialogRef.afterClosed().subscribe((reuireReload: boolean) => { if (reuireReload) this.updateList() });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
