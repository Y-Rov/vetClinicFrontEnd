import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { FinancialStatement } from '../../models/FinancialStatement/FinancialStatement';
import { MyDate } from '../../models/FinancialStatement/MyDate';

@Injectable({
  providedIn: 'root'
})
export class FinancialStatementService {

  readonly finStateUrl ="https://localhost:5001/api/financialStatements";
  constructor(
    protected http: HttpClient,
    protected tConstructor: { new(m: Partial<FinancialStatement>): FinancialStatement }  ) { }

  protected handleError<T>(operation: string = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<FinancialStatement> => {
      switch (error.status) {
        case 0:
          console.error(`During ${operation} a client-side error occurred: `, error.error);
          break;
        case 401:
          console.warn(`During ${operation}: Unauthorized access, code ${error.status}, body was: `, error.error);
          break;
        case 404:
          console.warn(`During ${operation}: Resource is not available code ${error.status}, body was: `, error.error);
          break;
        case 500:
          console.error(`During ${operation}: something went wrong on the server!`);
          break;
      }

      return of(result as FinancialStatement);
    }
  }

  getFinancialStatement(data: MyDate): Observable<FinancialStatement> {
    return this.http.put<FinancialStatement>(this.finStateUrl, data)
      .pipe(
        map((result) => new this.tConstructor(result)),
        catchError(this.handleError<FinancialStatement>('update')))

  }
}
