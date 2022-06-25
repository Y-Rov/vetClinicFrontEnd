import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';                    //Specially for sorting
import { ViewChild } from '@angular/core';                           //Specially for sorting
import { MatTableDataSource } from '@angular/material/table';
import { Exception } from 'src/app/core/models/Exception';
import { ExceptionService } from 'src/app/core/services/exceptionServices/exception.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-exception-page',
  templateUrl: './exception-page.component.html',
  styleUrls: ['./exception-page.component.sass']
})

export class ExceptionPageComponent implements OnInit {
  dataSource: MatTableDataSource<Exception> = new MatTableDataSource();               //Special data class to handle a table
  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  displayedColumns: string[] = ['name', 'date', 'path', 'button'];    //List of column names to be displayed
  displayedPagginationOptions: string[] = ['5', '10']
  constructor(
    private exceptionService: ExceptionService,
    private router: Router,

  ) {
  }

  ngOnInit(): void {
    this.updateList();
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator!;
  }

  onButtonInfoClick(element: Exception) {
    this.router.navigateByUrl(`/exceptions/${element.id}`)
  }
  onPrevButtonInfoClick() {
    this.exceptionService.getPagginatorOptions().subscribe(resp => {
      const keys = resp.headers.keys();
     let headers = keys.map(key=>
        `${key}: ${resp.headers.get(key)}`);
        let config = { ...resp.body! };
        console.log(headers);
        console.log(resp.url);
        console.log(resp.headers.get('access-control-allow-origin'));
    }) ;
  }
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private updateList(): void {
    this.exceptionService.getExceptions().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.sort = this.sort!;
    });
  }
}
