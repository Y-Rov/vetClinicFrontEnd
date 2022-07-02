import { Location } from "@angular/common";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { FinancialStatement } from '../../models/FinancialStatement/FinancialStatement';
import { MyDate } from '../../models/FinancialStatement/MyDate';
import { ResourceService } from '../resourceService/resource.service';

@Injectable({
  providedIn: 'root'
})
export class FinancialStatementService extends ResourceService < FinancialStatement >{

  constructor(
    private httpClient: HttpClient,
    private currentLocation: Location
  ) {
    super(httpClient, currentLocation, FinancialStatement, 'https://localhost:5001/api/financialStatements');
  }


  getFinancialStatement(data: MyDate): Observable<FinancialStatement> {
    const viewModel =
    {
      startDate: data.startDate,
      endDate: data.endDate
    };
    return this.http.post<FinancialStatement>(this.apiUrl, viewModel, this.httpOptions)
      .pipe(
        map((result) => new this.tConstructor(result)),
        catchError(this.handleError<FinancialStatement>('getAll'))
        );
  }

}
