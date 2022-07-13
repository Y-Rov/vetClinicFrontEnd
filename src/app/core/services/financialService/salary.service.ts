import { Location } from "@angular/common";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { SalaryParameters } from "../../models/operational-models/QueryParameters/SalaryParameters";
import { Salary } from '../../models/Salary';
import { ResourceService } from '../resourceService/resource.service';

@Injectable({
  providedIn: 'root'
})
export class SalaryService extends ResourceService<Salary>{

  constructor(
    private httpClient: HttpClient,
    private currentLocation: Location
  ) {
    super(httpClient, currentLocation, Salary, 'https://localhost:5001/api/Financial');
  }

  getAllSalary(pageNumber: number = 1, pageSize: number = 4)
    : Observable<SalaryParameters> {
    let url = `${this.apiUrl}?PageNumber=${pageNumber}&PageSize=${pageSize}`;

    return this.http.get<SalaryParameters>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<SalaryParameters>('GetAllSalary'))
      );
  }

  updateSalary(salary: Salary): Observable<Salary> {
    const viewModel = {
      id: salary.id,
      name: salary.name,
      value: salary.value,
    };
    return this.httpClient.put<Salary>(this.apiUrl, viewModel, this.httpOptions)
      .pipe(
        map((result) => new this.tConstructor(result)),
        catchError(this.handleError<Salary>('getById'))
      );
  }

}
