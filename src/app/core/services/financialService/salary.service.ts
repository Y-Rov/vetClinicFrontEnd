import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Salary } from '../../models/Salary';
import { Employee } from '../../models/Employees';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private apiUrl: string = 'https://62a8a98d943591102ba79934.mockapi.io/api/darkenhouk/salaries';
  constructor(private http: HttpClient) { }

  getSalary(): Observable<Salary[]> {
    const url = `${this.apiUrl}/salaries`;
    return this.http?.get<Salary[]>(url, this.httpOptions);
  }

  deleteSalary(salary: Salary): Observable<Salary> {
    const url = `${this.apiUrl}/salaries/${salary.id}`;
    console.log(url);
    return this.http.delete<Salary>(url);
  }

  deleteSalaryById(id: number): Observable<Salary> {
    const url = `${this.apiUrl}/salaries/${id}`;
    console.log(url);
    return this.http.delete<Salary>(url);
  }

  updateSalary(salary: Salary): Observable<Salary> {
    const url = `${this.apiUrl}/salaries/${salary.id}`;
    return this.http.put<Salary>(url, salary, this.httpOptions);
  }

  addSalary(salary: Salary): Observable<Salary> {
    const url = `${this.apiUrl}/salaries`;
    return this.http.post<Salary>(url, salary, this.httpOptions);
  }

  getEmployee(): Observable<Employee[]> {
    const url = `${this.apiUrl}/employees`;
    return this.http?.get<Employee[]>(url, this.httpOptions);
  }

  deleteEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.apiUrl}/employees/${employee.employeeId}`;
    console.log(url);
    return this.http.delete<Employee>(url);
  }

  deleteEmployeeById(employeeId: number): Observable<Employee> {
    const url = `${this.apiUrl}/employees/${employeeId}`;
    console.log(url);
    return this.http.delete<Employee>(url);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.apiUrl}/employees/${employee.employeeId}`;
    return this.http.put<Employee>(url, employee, this.httpOptions);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.apiUrl}/employees`;
    return this.http.post<Employee>(url, employee, this.httpOptions);
  }

}
