import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';                    //Specially for sorting
import { ViewChild } from '@angular/core';                           //Specially for sorting
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ExceptionStats } from 'src/app/core/models/ExceptionStats';
import { ExceptionService } from 'src/app/core/services/exceptionServices/exception.service';


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

    constructor(
        private exceptionService: ExceptionService,) {
        this.updateList();
        ;

    }

    ngOnInit(): void {
    }
    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator!;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    private updateList(): void {
        this.exceptionService.getExceptionsStats().subscribe((data) => {
            this.dataSource.data = data;
            this.dataSource.sort = this.sort!;
        });
        console.log(this.dataSource)
    }
}
