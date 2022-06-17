import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Location } from '@angular/common';
import { ResourceService } from '../resourceService/resource.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ResourceService<User> {
  constructor(
    http: HttpClient,
    currentLocation: Location
    ) {
      super(http, currentLocation, User, 'https://62a66c1d430ba53411d495fe.mockapi.io/api/users');
    }

}
