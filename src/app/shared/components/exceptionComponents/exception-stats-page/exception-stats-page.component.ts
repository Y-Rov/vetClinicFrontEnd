import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';                    //Specially for sorting
import { ViewChild } from '@angular/core';                           //Specially for sorting
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ExceptionStats } from 'src/app/core/models/ExceptionStats';
import { ExceptionService } from 'src/app/core/services/exceptionServices/exception.service';
import { ExceptionParameters } from 'src/app/core/models/operational-models/QueryParameters/ExceptionParameters';
import { Router } from '@angular/router';
import { ExceptionParametersWithList } from 'src/app/core/models/operational-models/QueryParameters/ExceptionParametersWithList';

@Component({
  selector: 'app-exception-stats-page',
  templateUrl: './exception-stats-page.component.html',
  styleUrls: ['./exception-stats-page.component.sass']
})

export class ExceptionStatsPageComponent implements OnInit {
  dataSource: MatTableDataSource<ExceptionStats> = new MatTableDataSource();               //Special data class to handle a table
  @ViewChild(MatSort) sort?: MatSort;
  displayedColumns: string[] = ['name', 'count'];    //List of column names to be displayed
  pagingInfo: ExceptionParameters | null = null;
  itemsPerPage: number = 5;
  options = [
    { name: "5", value: 5 },
    { name: "10", value: 5 }
  ]
  constructor(
    private exceptionService: ExceptionService,
    private router: Router,) {
  }

  ngOnInit(): void {
    this.updateList(1, 5);
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.updateList(this.pagingInfo!.currentPage, this.pagingInfo!.pageSize, filterValue);
  }

  private updateList(CurrentPage: number = 1, PageSize: number = 5, name: string = ""): void {
    if (name == "") {
      this.exceptionService.getExceptionsStats(CurrentPage, PageSize).subscribe((data) => {
        this.dataSource.data = data.exceptionList;
        this.dataSource.sort = this.sort!;
        this.updatePagingInfo(data)
      });
    }
    else {
      this.exceptionService.getExceptionsStats(CurrentPage, PageSize, name).subscribe((data) => {
        this.dataSource.data = data.exceptionList;
        this.dataSource.sort = this.sort!;
        this.updatePagingInfo(data)
      });
    }
  }

  onNextButtonInfoClick() {
    if (this.pagingInfo?.hasNext) {

      this.updateList(this.pagingInfo!.currentPage + 1, this.pagingInfo!.pageSize);
    }

  }
  onPrevButtonInfoClick() {

    if (this.pagingInfo?.hasPrevious) {

      this.updateList(this.pagingInfo!.currentPage - 1, this.pagingInfo!.pageSize);
    }

  }
  private updatePagingInfo(data: ExceptionParametersWithList): void {
    this.pagingInfo = <ExceptionParameters>data;
  }

  selectOption() {
    this.updateList(1, this.itemsPerPage);
  }
}
