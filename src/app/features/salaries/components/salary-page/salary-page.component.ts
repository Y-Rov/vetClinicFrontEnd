import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SalaryParameters } from '../../../../core/models/operational-models/QueryParameters/SalaryParameters';
import { Salary } from '../../../../core/models/Salary';
import { SalaryService } from '../../../../core/services/financialService/salary.service';
import { DeleteSalaryDialogComponent } from '../delete-salary-dialog/delete-salary-dialog.component';
import { EditSalaryDialogComponent } from '../edit-salary-dialog/edit-salary-dialog.component';
import { NewSalaryDialogComponent } from '../new-salary-dialog/new-salary-dialog.component';

@Component({
  selector: 'app-salary-page',
  templateUrl: './salary-page.component.html',
  styleUrls: ['./salary-page.component.sass']
})
export class SalaryPageComponent implements OnInit {

  dataSource: MatTableDataSource<Salary> = new MatTableDataSource();
  displayedColumns: string[] = ['emloyeeId', 'name', 'value', 'edit', 'delete'];

  pageSizeOptions: { name: string; value: number }[] = [
    { name: '5', value: 5 },
    { name: '10', value: 10 },
    { name: '20', value: 20 }
  ];
  pageInfo: SalaryParameters | null = null;
  currentPageSize: number = this.pageSizeOptions[0].value;

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(
    private salaryService: SalaryService,
    private matDialog: MatDialog) {
  }

  private updateList(pageNumber: number = 1, pageSize: number = 5): void {
    this.salaryService.getAllSalary(pageNumber, pageSize).subscribe((data) => {
      this.dataSource.data = data.entities;
      this.updatePageInfo(data);
    });
  }

  private updatePageInfo(data: SalaryParameters): void {
    this.pageInfo = <SalaryParameters>data;
  }

  onNextPageClick(): void {
    if (this.pageInfo?.hasNext)
      this.updateList(this.pageInfo.currentPage + 1, this.pageInfo.pageSize);
  }

  onPrevPageClick(): void {
    if (this.pageInfo?.hasPrevious)
      this.updateList(this.pageInfo.currentPage - 1, this.pageInfo.pageSize);
  }

  selectPageSizeOptions(): void {
    this.updateList(1, this.currentPageSize);
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
        id: salary.id,
        name: salary.name
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

  onNewSalary() {
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
