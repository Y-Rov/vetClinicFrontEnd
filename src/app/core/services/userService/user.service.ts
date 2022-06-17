import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Location } from '@angular/common';
import { ResourceService } from '../resourceService/resource.service';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RegisterEmployeeModel } from '../../models/RegisterEmployeeModel';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ResourceService<User> {
  constructor(
    http: HttpClient,
    currentLocation: Location) {
      super(http, currentLocation, User, 'https://localhost:5001/api/users');
    }

  createEmployee(regForm: RegisterEmployeeModel): Observable<User> {
    const url = `https://localhost:5001/api/users/register/${regForm.role?.toLowerCase()}`;

    this.httpOptions.headers.append('body', JSON.stringify({
      firstName: regForm.firstName,
      lastName: regForm.lastName,
      phoneNumber: regForm.phoneNumber,
      email: regForm.email,
      password: regForm.password,
      confirmPassword: regForm.confirmPassword
    }));

    return this.http.post<User>(url, regForm, this.httpOptions)
      .pipe(
        map((result) => new this.tConstructor(result)),
        catchError(super.handleError<User>('createEmployee', regForm))
      );
  }
}
