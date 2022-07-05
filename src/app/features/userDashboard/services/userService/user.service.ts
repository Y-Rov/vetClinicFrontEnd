import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../../core/models/User';
import { Location } from '@angular/common';
import { ResourceService } from '../../../../core/services/resourceService/resource.service';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { RegisterEmployeeModel } from '../../../../core/models/RegisterEmployeeModel';
import { RegisterFormModel } from 'src/app/core/models/operational-models/form-models/RegisterFormModel';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ResourceService<User> {
  constructor(
    http: HttpClient,
    currentLocation: Location) {
      super(http, currentLocation, User, 'https://localhost:5001/api/users');
  }

  getAllUsers(takeCount?: number, skipCount: number = 0, filterParam: string | null = null, orderByParam: string | null = null): Observable<User[]> {
    let url = `${this.apiUrl}?SkipCount=${skipCount}`;

    if (takeCount !== null) {
      url += `&TakeCount=${takeCount}`;
    }

    if (filterParam !== null) {
      url += `&FilterParam=${filterParam}`;
    }

    if (orderByParam !== null) {
      url += `&OrderByParam=${orderByParam}`;
    }

    return this.http.get<User[]>(url)
      .pipe(
        map((result) => result.map((i) => new this.tConstructor(i))),
        catchError(this.handleError<User[]>('getAll', []))
      );
  }

  getDoctors(specialization: string = ""): Observable<User[]> {
    const url = `${this.apiUrl}/doctors?specialization=${specialization}`;
    return this.http.get<User[]>(url);
  }

  registerClient(regForm: RegisterFormModel): Observable<User> {
    const url = `${this.apiUrl}/register`;

    return this.http.post<User>(url, regForm, this.httpOptions)
      .pipe(
        map(result => new this.tConstructor(result)),
        catchError((err) => {
          super.handleError<User>('registerClient', regForm);
          return throwError(err);
        }));
  }

  registerEmployee(regForm: RegisterEmployeeModel): Observable<User> {
    const url = `${this.apiUrl}/register/${regForm.role?.toLowerCase()}`;

    return this.http.post<User>(url, regForm, this.httpOptions)
      .pipe(
        map((result) => new this.tConstructor(result)),
        catchError(super.handleError<User>('registerEmployee', regForm))
      );
  }
}