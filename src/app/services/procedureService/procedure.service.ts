import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Procedure } from '../../models/Procedure';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
    
  private apiUrl : string = 'https://62a63effb9b74f766a45a4cb.mockapi.io/api/sefirus/procedures';

  constructor(private   http: HttpClient) { }

  getProcedures(): Observable<Procedure[]>{
    return this.http?.get<Procedure[]>(this.apiUrl, this.httpOptions);
  }

  deleteProcedure(procedure : Procedure): Observable<Procedure>{
    const url = `${this.apiUrl}/${procedure.id}`;
    console.log(url);
    return this.http.delete<Procedure>(url);
  }

  deleteProcedureById(id: number): Observable<Procedure>{
    const url = `${this.apiUrl}/${id}`;
    console.log(url);
    return this.http.delete<Procedure>(url);
  }

  updateProcedure(procedure: Procedure): Observable<Procedure>{
    const url = `${this.apiUrl}/${procedure.id}`;
    return this.http.put<Procedure>(url, procedure, this.httpOptions);
  }

  addProcedure(procedure: Procedure): Observable<Procedure>{
    return this.http.post<Procedure>(this.apiUrl, procedure, this.httpOptions);
  }
}
