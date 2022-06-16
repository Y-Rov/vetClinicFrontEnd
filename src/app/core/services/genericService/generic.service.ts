import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T extends { id: number }> {
  url: string = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url)
      .pipe(
        catchError(this.handleError<T[]>('getAll', []))
      );
  }

  getById(id: number): Observable<T> {
    const url = `${this.url}/${id}`;

    return this.http.get<T>(url)
      .pipe(
        catchError(this.handleError<T>('getById'))
      );
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(this.url, entity, this.httpOptions)
      .pipe(
        catchError(this.handleError<T>('create', entity))
      );
  }

  update(entity: T): Observable<T> {
    const url = `${this.url}/${entity.id}`;
    return this.http.put<T>(url, entity, this.httpOptions)
      .pipe(
        catchError(this.handleError<T>('update', entity))
      );
  }

  delete(entity: T): Observable<T> {
    const url = `${this.url}/${entity.id}`;
    return this.http.delete<T>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<T>('delete', entity))
      );
  }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      switch (error.status) {
        case 0:
          console.error('A client-side error occurred: ', error.error);
          break;
        case 401:
          console.warn(`Unauthorized access, code ${error.status}, body was: `, error.error);
          break;
        case 404:
          console.warn(`Resource not availab,e code ${error.status}, body was: `, error.error);
          break;
        case 500:
          console.error('Something went wrong on the server!');
          break;
      }

      return of(result as T);
    }
  }
}
