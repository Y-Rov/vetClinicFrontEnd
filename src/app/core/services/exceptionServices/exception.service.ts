import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Exception } from '../../models/Exception';
import { ExceptionStats } from '../../models/ExceptionStats';


@Injectable({
  providedIn: 'root'
})
export class ExceptionService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private apiUrlexception : string = 'https://localhost:5001/api/exceptions';

  constructor(private http: HttpClient) { }

  getExceptions(): Observable<Exception[]>{
    return this.http?.get<Exception[]>(this.apiUrlexception, this.httpOptions);
  }
  getExceptionsToday(): Observable<Exception[]>{
    const url = `${this.apiUrlexception}/today`;
    return this.http?.get<Exception[]>(url, this.httpOptions);
  }
  getExceptionsStatsToday(): Observable<ExceptionStats[]>{
    const url = `${this.apiUrlexception}/stats/today`;
    return this.http?.get<ExceptionStats[]>(url, this.httpOptions);
  }
  getExceptionsStats(): Observable<ExceptionStats[]>{
    const url = `${this.apiUrlexception}/stats`;
    return this.http?.get<ExceptionStats[]>(url, this.httpOptions);
  }
  getExceptionById(id:number): Observable<Exception>{
    const url = `${this.apiUrlexception}/${id}`;
    return this.http?.get<Exception>(url, this.httpOptions);
  }
}
