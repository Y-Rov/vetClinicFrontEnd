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

  private apiUrlexception : string = 'https://62a722cebedc4ca6d7c2eafe.mockapi.io/api/exceptions';
  private apiUrlestats: string = 'https://62a722cebedc4ca6d7c2eafe.mockapi.io/api/stats';

  constructor(private http: HttpClient) { }

  getExceptions(): Observable<Exception[]>{
    return this.http?.get<Exception[]>(this.apiUrlexception, this.httpOptions);
  }
  getExceptionsStats(): Observable<ExceptionStats[]>{
    return this.http?.get<ExceptionStats[]>(this.apiUrlestats, this.httpOptions);
  }
  getExceptionById(id:number): Observable<Exception>{
    const url = `${this.apiUrlexception}/${id}`;
    return this.http?.get<Exception>(url, this.httpOptions);
  }
}