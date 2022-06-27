import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';                    //Specially for sorting
import { ViewChild } from '@angular/core';                           //Specially for sorting
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ExceptionStats } from 'src/app/core/models/ExceptionStats';
import { ExceptionService } from 'src/app/core/services/exceptionServices/exception.service';
import { Router } from '@angular/router';
import { PagingParameters } from 'src/app/core/models/operational-models/Paging/PagingParameters';

@Component({
  selector: 'app-exception-today-stats-page',
  templateUrl: './exception-today-stats-page.component.html',
  styleUrls: ['./exception-today-stats-page.component.sass']
})

export class ExceptionTodayStatsPageComponent implements OnInit {
  dataSource: MatTableDataSource<ExceptionStats> = new MatTableDataSource();               //Special data class to handle a table
  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  displayedColumns: string[] = ['name', 'count'];    //List of column names to be displayed
  displayedPagginationOptions: string[] = ['5', '10']
  paggingInfo: PagingParameters | null = null;
  itemsPerPage: number = 5;
  options = [
    { name: "5", value: 5 },
    { name: "10", value: 10 }
  ]
  constructor(
    private exceptionService: ExceptionService,
    private router: Router) {
      this.updatePaggingInfo();
  }

  ngOnInit(): void {
    this.selectOption();
  }

  ngAfterViewInit(): void {
    this.updateList(this.paggingInfo?.CurrentPage, this.paggingInfo?.PageSize);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.updateList(this.paggingInfo!.CurrentPage, this.paggingInfo!.PageSize, filterValue);
    this.updatePaggingInfo(this.paggingInfo!.CurrentPage, this.paggingInfo!.PageSize, filterValue);
  }

  private updateList(CurrentPage: number = 1, PageSize: number = 5, name: string = ""): void {
    if (name == "") {
      this.exceptionService.getExceptionsStatsToday(CurrentPage, PageSize).subscribe((data) => {
        this.dataSource.data = data;
        this.dataSource.sort = this.sort!;
        console.log(data);
      });
    }
    else {
      this.exceptionService.getExceptionsStatsToday(CurrentPage, PageSize, name).subscribe((data) => {
        this.dataSource.data = data;
        this.dataSource.sort = this.sort!;
        console.log(data);
      });
    }
  }

  onPrevButtonInfoClick() {
    if (this.paggingInfo?.HasPrevious) {

      this.updateList(this.paggingInfo!.CurrentPage - 1, this.paggingInfo!.PageSize);
      this.updatePaggingInfo(this.paggingInfo!.CurrentPage - 1, this.paggingInfo!.PageSize);
    }
  }

  onNextButtonInfoClick() {
    if (this.paggingInfo?.HasNext) {

      this.updateList(this.paggingInfo!.CurrentPage + 1, this.paggingInfo!.PageSize);
      this.updatePaggingInfo(this.paggingInfo!.CurrentPage + 1, this.paggingInfo!.PageSize);
    }

  }

  private updatePaggingInfo(CurrentPage: number = 1, PageSize: number = 5, name: string = ""): void {
    if (name == "") {
      this.exceptionService.getPagginatorExceptionsStatsTodayOptions(CurrentPage, PageSize).subscribe(resp => {

        this.paggingInfo = <PagingParameters>JSON.parse(resp.headers.get('x-pagination')!);
        console.log(this.paggingInfo);
      });
    }
    else {
      this.exceptionService.getPagginatorExceptionsStatsTodayOptions(CurrentPage, PageSize, name).subscribe(resp => {

        this.paggingInfo = <PagingParameters>JSON.parse(resp.headers.get('x-pagination')!);
        console.log(this.paggingInfo);
      });
    }
  }

  selectOption() {
    this.updatePaggingInfo(1, this.itemsPerPage);
    this.updateList(1, this.itemsPerPage);
  }
}
