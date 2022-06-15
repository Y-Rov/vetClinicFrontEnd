import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Salary } from '../../models/Salary';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private apiUrl: string = 'https://62a8a98d943591102ba79934.mockapi.io/api/darkenhouk/salaries/salaries';

  constructor(private http: HttpClient) { }

  getSalary(): Observable<Salary[]> {
    return this.http?.get<Salary[]>(this.apiUrl, this.httpOptions);
  }

  deleteSalary(salary: Salary): Observable<Salary> {
    const url = `${this.apiUrl}/${salary.EmloyeeId}`;
    console.log(url);
    return this.http.delete<Salary>(url);
  }

  deleteSalaryById(id: number): Observable<Salary> {
    const url = `${this.apiUrl}/${id}`;
    console.log(url);
    return this.http.delete<Salary>(url);
  }

  updateSalary(salary: Salary): Observable<Salary> {
    const url = `${this.apiUrl}/${salary.EmloyeeId}`;
    return this.http.put<Salary>(url, salary, this.httpOptions);
  }

  addSalary(salary: Salary): Observable<Salary> {
    return this.http.post<Salary>(this.apiUrl, salary, this.httpOptions);
  }
}
