import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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

  getExceptions(pageNumber:number=1, pageSize:number=5,name:string=""): Observable<Exception[]>{
    let url = `${this.apiUrlexception}?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    if(name!="")
    {
      url = `${this.apiUrlexception}?Name=${name}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
    }
    
    return this.http?.get<Exception[]>(url, this.httpOptions);
  }

  getExceptionsToday(pageNumber:number=1, pageSize:number=5,name:string=""): Observable<Exception[]>{
    let url = `${this.apiUrlexception}/today?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    if(name!="")
    {
      url = `${this.apiUrlexception}/today?Name=${name}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
    }
    
    return this.http?.get<Exception[]>(url, this.httpOptions);
  }

  getExceptionsStatsToday(pageNumber:number=1, pageSize:number=5,name:string=""): Observable<ExceptionStats[]>{
    let url = `${this.apiUrlexception}/stats/today?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    if(name!="")
    {
      url = `${this.apiUrlexception}/stats/today?Name=${name}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
    }
   
    return this.http?.get<ExceptionStats[]>(url, this.httpOptions);
  }

  getExceptionsStats(pageNumber:number=1, pageSize:number=5,name:string=""): Observable<ExceptionStats[]>{
    let url = `${this.apiUrlexception}/stats?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    if(name!="")
    {
      url = `${this.apiUrlexception}/stats?Name=${name}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
    }
    return this.http?.get<ExceptionStats[]>(url, this.httpOptions);
  }

  getExceptionById(id:number): Observable<Exception>{
    const url = `${this.apiUrlexception}/${id}`;
    return this.http?.get<Exception>(url, this.httpOptions);
  }

  getPagginatorExceptionsOptions(pageNumber:number=1, pageSize:number=5,name:string=""):Observable<HttpResponse<any>> {
    let url = `${this.apiUrlexception}?pageNumber=${pageNumber}&pageSize=${pageSize}`;
     if(name!="")
    {
      url = `${this.apiUrlexception}?Name=${name}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
    }
   return this.http?.get<any>(url, {observe: 'response'});
  }

  getPagginatorExceptionsTodayOptions(pageNumber:number=1, pageSize:number=5,name:string=""):Observable<HttpResponse<any>> {
    let url = `${this.apiUrlexception}/today?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    if(name!="")
    {
      url = `${this.apiUrlexception}/today?Name=${name}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
    }
   return this.http?.get<any>(url, {observe: 'response'});
  }

  getPagginatorExceptionsStatsOptions(pageNumber:number=1, pageSize:number=5,name:string=""):Observable<HttpResponse<any>> {
    let url = `${this.apiUrlexception}/stats?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    if(name!="")
    {
      url = `${this.apiUrlexception}/stats?Name=${name}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
    }
   return this.http?.get<any>(url, {observe: 'response'});
  }
  
  getPagginatorExceptionsStatsTodayOptions(pageNumber:number=1, pageSize:number=5,name:string=""):Observable<HttpResponse<any>> {
    let url = `${this.apiUrlexception}/stats/today?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    if(name!="")
    {
      url = `${this.apiUrlexception}/stats/today?Name=${name}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
    }
   return this.http?.get<any>(url, {observe: 'response'});
  }
}
