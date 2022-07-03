import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';                    //Specially for sorting
import { ViewChild } from '@angular/core';                           //Specially for sorting
import { MatTableDataSource } from '@angular/material/table';
import { Exception } from 'src/app/core/models/Exception';
import { ExceptionService } from 'src/app/core/services/exceptionServices/exception.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ExceptionParameters } from 'src/app/core/models/operational-models/QueryParameters/ExceptionParameters';
import { ExceptionParametersWithList } from 'src/app/core/models/operational-models/QueryParameters/ExceptionParametersWithList';

@Component({
  selector: 'app-exception-today-page',
  templateUrl: './exception-today-page.component.html',
  styleUrls: ['./exception-today-page.component.sass']
})

export class ExceptionTodayPageComponent implements OnInit {
  dataSource: MatTableDataSource<Exception> = new MatTableDataSource();               //Special data class to handle a table
  @ViewChild(MatSort) sort?: MatSort;
  displayedColumns: string[] = ['name', 'date', 'path', 'button'];    //List of column names to be displayed
  paggingInfo: ExceptionParameters | null = null;
  itemsPerPage: number = 5;
  options = [
    { name: "5", value: 5 },
    { name: "10", value: 10 }
  ]
  constructor(
    private exceptionService: ExceptionService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.updateList(1, 5);
  }

  ngAfterViewInit(): void {
    this.updateList(this.paggingInfo?.currentPage, this.paggingInfo?.pageSize);
  }


  onButtonInfoClick(element: Exception) {
    this.router.navigateByUrl(`/exceptions/${element.id}`)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.updateList(this.paggingInfo!.currentPage, this.paggingInfo!.pageSize, filterValue);
  }

  private updateList(CurrentPage: number = 1, PageSize: number = 5, name: string = ""): void {
    if (name == "") {
      this.exceptionService.getExceptionsToday(CurrentPage, PageSize).subscribe((data) => {
        this.dataSource.data = data.exceptionList;
        this.dataSource.sort = this.sort!;
        this.updatePaggingInfo(data)
      });
    }
    else {
      this.exceptionService.getExceptionsToday(CurrentPage, PageSize, name).subscribe((data) => {
        this.dataSource.data = data.exceptionList;
        this.dataSource.sort = this.sort!;
        this.updatePaggingInfo(data)
      });
    }
  }

  onNextButtonInfoClick() {
    if (this.paggingInfo?.hasNext) {

      this.updateList(this.paggingInfo!.currentPage + 1, this.paggingInfo!.pageSize);
    }

  }
  onPrevButtonInfoClick() {

    if (this.paggingInfo?.hasPrevious) {

      this.updateList(this.paggingInfo!.currentPage - 1, this.paggingInfo!.pageSize);
    }

  }
  private updatePaggingInfo(data: ExceptionParametersWithList): void {
    this.paggingInfo = <ExceptionParameters>data;
  }

  selectOption() {
    this.updateList(1, this.itemsPerPage);
  }
}
