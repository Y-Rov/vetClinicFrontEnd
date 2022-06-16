import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
        catchError(this.handleError<T[]>('getAll'))
      );
  }

  getById(id: number): Observable<T> {
    const userUrl = `${this.url}/${id}`;

    return this.http.get<T>(userUrl)
      .pipe(
        catchError(this.handleError<T>('getById'))
      );
  }

  create(user: T): Observable<T> {
    return this.http.post<T>(this.url, user, this.httpOptions)
      .pipe(
        catchError(this.handleError<T>('create'))
      );
  }

  update(user: T): Observable<T> {
    const userUrl = `${this.url}/${user.id}`;
    return this.http.put<T>(userUrl, user, this.httpOptions)
      .pipe(
        catchError(this.handleError<T>('update'))
      );
  }

  delete(user: T): Observable<T> {
    const userUrl = `${this.url}/${user.id}`;
    return this.http.delete<T>(userUrl, this.httpOptions)
      .pipe(
        catchError(this.handleError<T>('delete'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
