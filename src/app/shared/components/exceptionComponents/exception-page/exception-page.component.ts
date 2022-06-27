import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';                    //Specially for sorting
import { ViewChild } from '@angular/core';                           //Specially for sorting
import { MatTableDataSource } from '@angular/material/table';
import { Exception } from 'src/app/core/models/Exception';
import { ExceptionService } from 'src/app/core/services/exceptionServices/exception.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { R3SelectorScopeMode } from '@angular/compiler';
import { Subject } from 'rxjs';
import { ExceptionParameters } from 'src/app/core/models/operational-models/QueryParameters/ExceptionParameters';

@Component({
  selector: 'app-exception-page',
  templateUrl: './exception-page.component.html',
  styleUrls: ['./exception-page.component.sass']
})

export class ExceptionPageComponent implements OnInit {
  dataSource: MatTableDataSource<Exception> = new MatTableDataSource();
  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  displayedColumns: string[] = ['name', 'date', 'path', 'button'];
  displayedPagginationOptions: string[] = ['5', '10']
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
    this.updatePaggingInfo();
  }

  ngOnInit(): void {
    this.selectOption();
  }
  
  ngAfterViewInit(): void {
    this.updateList(this.paggingInfo?.CurrentPage, this.paggingInfo?.PageSize);
  }

  onButtonInfoClick(element: Exception) {
    this.router.navigateByUrl(`/exceptions/${element.id}`)
  }
  onNextButtonInfoClick() {
    if (this.paggingInfo?.HasNext) {

      this.updateList(this.paggingInfo!.CurrentPage + 1, this.paggingInfo!.PageSize);
      this.updatePaggingInfo(this.paggingInfo!.CurrentPage + 1, this.paggingInfo!.PageSize);
    }

  }
  onPrevButtonInfoClick() {

    if (this.paggingInfo?.HasPrevious) {

      this.updateList(this.paggingInfo!.CurrentPage - 1, this.paggingInfo!.PageSize); 
      this.updatePaggingInfo(this.paggingInfo!.CurrentPage - 1, this.paggingInfo!.PageSize);
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.updateList(this.paggingInfo!.CurrentPage, this.paggingInfo!.PageSize, filterValue);
    this.updatePaggingInfo(this.paggingInfo!.CurrentPage, this.paggingInfo!.PageSize, filterValue);

  }

  private updateList(CurrentPage: number = 1, PageSize: number = 5, name: string = ""): void {
    if (name == "") {
      this.exceptionService.getExceptions(CurrentPage, PageSize).subscribe((data) => {
        this.dataSource.data = data;
        this.dataSource.sort = this.sort!;
        console.log(data);
      });
    }
    else {
      this.exceptionService.getExceptions(CurrentPage, PageSize, name).subscribe((data) => {
        this.dataSource.data = data;
        this.dataSource.sort = this.sort!;
        console.log(data);
      });
    }
  }

  private updatePaggingInfo(CurrentPage: number = 1, PageSize: number = 5, name: string = ""): void {
    if (name == "") {
      this.exceptionService.getPagginatorExceptionsOptions(CurrentPage, PageSize).subscribe(resp => {

        this.paggingInfo = <ExceptionParameters>JSON.parse(resp.headers.get('x-pagination')!);
        console.log(this.paggingInfo);
      });
    }
    else {
      this.exceptionService.getPagginatorExceptionsOptions(CurrentPage, PageSize, name).subscribe(resp => {

        this.paggingInfo = <ExceptionParameters>JSON.parse(resp.headers.get('x-pagination')!);
        console.log(this.paggingInfo);
      });
    }
  }

  selectOption() {
    this.updatePaggingInfo(1, this.itemsPerPage);
    this.updateList(1, this.itemsPerPage);
  }
}
