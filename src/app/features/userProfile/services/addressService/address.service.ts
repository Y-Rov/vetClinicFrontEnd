import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Address} from "../../../../core/models/Address";
import { Location } from "@angular/common";
import {ResourceService} from "../../../../core/services/resourceService/resource.service";
import {catchError, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'any'
})
export class AddressService extends ResourceService<Address> {

  constructor(
    private httpClient: HttpClient,
    private currentLocation: Location
  ) {
    super(httpClient, currentLocation, Address, 'https://localhost:5001/api/addresses');
  }

  override update(entity: Partial<Address>): Observable<Address> {
    const url = `${this.apiUrl}/${entity.id}`;
    return this.http.patch<Address>(url, entity, this.httpOptions)
      .pipe(
        map((result) => new this.tConstructor(result)),
        catchError(this.handleError<Address>('update'))
      );
  }
}
