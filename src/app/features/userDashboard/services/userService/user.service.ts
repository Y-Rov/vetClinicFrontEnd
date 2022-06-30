import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../../core/models/User';
import { Location } from '@angular/common';
import { ResourceService } from '../../../../core/services/resourceService/resource.service';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RegisterEmployeeModel } from '../../../../core/models/RegisterEmployeeModel';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ResourceService<User> {
  constructor(
    http: HttpClient,
    currentLocation: Location) {
      super(http, currentLocation, User, 'https://localhost:5001/api/users');
  }

  getAllUsers(takeCount?: number, skipCount: number = 0, orderByParam?: string): Observable<User[]> {
    let url = `${this.apiUrl}?skipCount=${skipCount}`;

    if (takeCount !== null) {
      url += `&takeCount=${takeCount}`;
    }

    if (orderByParam !== null) {
      url += `&orderByParam=${orderByParam}`;
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

  registerEmployee(regForm: RegisterEmployeeModel): Observable<User> {
    const url = `${this.apiUrl}/register/${regForm.role?.toLowerCase()}`;

    return this.http.post<User>(url, regForm, this.httpOptions)
      .pipe(
        map((result) => new this.tConstructor(result)),
        catchError(super.handleError<User>('registerEmployee', regForm))
      );
  }
}
