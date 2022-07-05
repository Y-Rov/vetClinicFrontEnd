import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ExceptionParametersWithList } from 'src/app/core/models/operational-models/QueryParameters/ExceptionParametersWithList';
import { Exception } from 'src/app/core/models/Exception';


@Injectable({
  providedIn: 'root'
})
export class ExceptionService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private apiUrlexception: string = 'https://localhost:5001/api/exceptions';

  constructor(private http: HttpClient) { }

  getExceptions(pageNumber: number = 1, pageSize: number = 5, name: string = ""): Observable<ExceptionParametersWithList> {
    let url = `${this.apiUrlexception}?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    if (name != "") {
      url = `${this.apiUrlexception}?Name=${name}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
    }

    return this.http?.get<ExceptionParametersWithList>(url, this.httpOptions);
  }

  getExceptionsToday(pageNumber: number = 1, pageSize: number = 5, name: string = ""): Observable<ExceptionParametersWithList> {
    let url = `${this.apiUrlexception}/today?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    if (name != "") {
      url = `${this.apiUrlexception}/today?Name=${name}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
    }

    return this.http?.get<ExceptionParametersWithList>(url, this.httpOptions);
  }

  getExceptionsStatsToday(pageNumber: number = 1, pageSize: number = 5, name: string = ""): Observable<ExceptionParametersWithList> {
    let url = `${this.apiUrlexception}/stats/today?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    if (name != "") {
      url = `${this.apiUrlexception}/stats/today?Name=${name}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
    }

    return this.http?.get<ExceptionParametersWithList>(url, this.httpOptions);
  }

  getExceptionsStats(pageNumber: number = 1, pageSize: number = 5, name: string = ""): Observable<ExceptionParametersWithList> {
    let url = `${this.apiUrlexception}/stats?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    if (name != "") {
      url = `${this.apiUrlexception}/stats?Name=${name}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
    }
    return this.http?.get<ExceptionParametersWithList>(url, this.httpOptions);
  }

  getExceptionById(id: number): Observable<Exception> {
    const url = `${this.apiUrlexception}/${id}`;
    return this.http?.get<Exception>(url, this.httpOptions);
  }
}
