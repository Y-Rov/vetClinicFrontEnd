import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../../core/models/User';
import { Location } from '@angular/common';
import { ResourceService } from '../../../../core/services/resourceService/resource.service';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RegisterEmployeeModel } from '../../../../core/models/RegisterEmployeeModel';
import { UserParameters } from 'src/app/core/models/operational-models/QueryParameters/UserParameters';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ResourceService<User> {
  constructor(
    http: HttpClient,
    currentLocation: Location) {
      super(http, currentLocation, User, 'https://localhost:5001/api/users');
  }

  getAllUsers(pageNumber: number = 1, pageSize: number = 5, filterParam: string | null = null, orderByParam: string | null = null): Observable<UserParameters> {
    let url = `${this.apiUrl}?PageNumber=${pageNumber}&PageSize=${pageSize}`;

    if (filterParam !== null) {
      url += `&FilterParam=${filterParam}`;
    }

    if (orderByParam !== null) {
      url += `&OrderByParam=${orderByParam}`;
    }

    return this.http.get<UserParameters>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<UserParameters>('getAll'))
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