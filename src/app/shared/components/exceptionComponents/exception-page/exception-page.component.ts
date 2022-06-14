import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';                    //Specially for sorting
import { ViewChild } from '@angular/core';                           //Specially for sorting
import { MatTableDataSource } from '@angular/material/table';
import { Exception } from 'src/app/core/models/Exception';
import { ExceptionService } from 'src/app/core/services/exceptionServices/exception.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';



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

  constructor(
    private exceptionService: ExceptionService,
    private router: Router,
  ) {
    this.updateList();
    ;

  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator!;
  }
  onButtonInfoClick(element: Exception) {
    this.router.navigateByUrl(`/exceptions/${element.id}`)
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
