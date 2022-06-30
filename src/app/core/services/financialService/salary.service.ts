import { Location } from "@angular/common";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { map } from "rxjs/operators";
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
