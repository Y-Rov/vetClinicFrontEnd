import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Address} from "../../models/Address";
import { Location } from "@angular/common";
import {ResourceService} from "../resourceService/resource.service";

@Injectable({
  providedIn: 'root'
})
export class AddressService extends ResourceService<Address> {

  constructor(
    private httpClient: HttpClient,
    private currentLocation: Location
  ) {
    super(httpClient, currentLocation, Address, 'https://localhost:5001/api/addresses');
  }
}
