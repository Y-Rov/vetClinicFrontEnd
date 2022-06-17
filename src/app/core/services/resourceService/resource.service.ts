import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import {map} from "rxjs/operators";
import {Location} from "@angular/common";
import {ResourceModel} from "../../models/ResourceModel";

export abstract class ResourceService<T extends ResourceModel<T>> {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  protected constructor(
    private http: HttpClient,
    private location: Location,
    private tConstructor: { new (m: Partial<T>): T },
    protected apiUrl: string
  ) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl)
      .pipe(
        map((result) => result.map((i) => new this.tConstructor(i))),
        catchError(this.handleError<T[]>('getAll', []))
      );
  }

  getById(id: number): Observable<T> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.get<T>(url)
      .pipe(
        map((result) => new this.tConstructor(result)),
        catchError(this.handleError<T>('getById'))
      );
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, entity, this.httpOptions)
      .pipe(
        map((result) => new this.tConstructor(result)),
        catchError(this.handleError<T>('create', entity))
      );
  }

  update(entity: T): Observable<T> {
    return this.http.put<T>(this.apiUrl, entity, this.httpOptions)
      .pipe(
        map((result) => new this.tConstructor(result)),
        catchError(this.handleError<T>('update', entity))
      );
  }

  deleteById(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<void>('delete'))
      );
  }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
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

      return of(result as T);
    }
  }

  goToPreviousPage(): void {
    this.location.back();
  }
}
