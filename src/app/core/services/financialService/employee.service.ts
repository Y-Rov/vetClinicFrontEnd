import { Location } from "@angular/common";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { ResourceService } from '../resourceService/resource.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ResourceService<User>{

  constructor(
    private httpClient: HttpClient,
    private currentLocation: Location
  ) {
    super(httpClient, currentLocation, User, 'https://localhost:5001/api/employees');
  }
}
