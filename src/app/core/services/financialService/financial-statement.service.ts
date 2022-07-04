import { Location } from "@angular/common";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { FinStatementOneMonth } from "../../models/FinancialStatement/FinStatementOneMonth";
import { MyDate } from '../../models/FinancialStatement/MyDate';
import { ResourceService } from '../resourceService/resource.service';

@Injectable({
  providedIn: 'root'
})
export class FinancialStatementService extends ResourceService <FinStatementOneMonth>{

  constructor(
    private httpClient: HttpClient,
    private currentLocation: Location
  ) {
    super(httpClient, currentLocation, FinStatementOneMonth, 'https://localhost:5001/api/financialStatements');
  }


  getFinancialStatement(data: MyDate): Observable<FinStatementOneMonth[]> {
    const viewModel =
    {
      startDate: data.startDate,
      endDate: data.endDate
    };
    return this.http.post<FinStatementOneMonth[]>(this.apiUrl, viewModel, this.httpOptions)
      .pipe(
        map((result) => result.map((i) => new this.tConstructor(i))),
        catchError(this.handleError<FinStatementOneMonth[]>('getAll'))
        );
  }

}
