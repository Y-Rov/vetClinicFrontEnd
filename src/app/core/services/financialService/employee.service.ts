import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from "@angular/common";
import { Employee } from '../../models/Employees';
import { ResourceService } from '../resourceService/resource.service';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ResourceService<User>{

  constructor(
    private httpClient: HttpClient,
    private currentLocation: Location
  ) {
    super(httpClient, currentLocation, Employee, 'https://localhost:5001/api/employees');
  }
}
