import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Address} from "../../models/Address";
import { Location } from "@angular/common";
import {GenericService} from "../genericService/generic.service";


@Injectable({
  providedIn: 'root'
})
export class AddressService extends GenericService<Address> {

  constructor(
    private httpClient: HttpClient,
    private currentLocation: Location
  ) {
    super(httpClient, currentLocation, Address, 'https://localhost:5001/api/addresses');
  }

  // getAddresses(): Observable<Address[]> {
  //   return this.http.get<Address[]>(this.apiURL)
  //     .pipe(
  //       tap(_ => console.log('Fetched addresses')),
  //       catchError(this.handleError<Address[]>('getAddresses', []))
  //     );
  // }
  //
  // /** GET address by id. Will 404 if id not found */
  // getAddress(id: number): Observable<Address> {
  //   const url = `${this.apiURL}/${id}`;
  //   return this.http.get<Address>(url)
  //     .pipe(
  //       tap(_ => console.log(`Fetched address with id = ${id}`)),
  //       catchError(this.handleError<Address>(`getAddress id = ${id}`))
  //     );
  // }
  //
  // /** POST: add a new address to the current user */
  // addAddress(address: Address): Observable<Address> {
  //   return this.http.post<Address>(this.apiURL, address, this.httpOptions)
  //     .pipe(
  //       tap((newAddress: Address) => console.log(`Added address with id = ${newAddress.userId}`)),
  //       catchError(this.handleError<Address>('addAddress'))
  //     );
  // }
  //
  // /** PUT: update the current user's address */
  // updateAddress(address: Address): Observable<Address> {
  //   return this.http.put<Address>(this.apiURL, address, this.httpOptions)
  //     .pipe(
  //       tap(_ => console.log(`Updated address with id = ${address.userId}`)),
  //       catchError(this.handleError<Address>('updateAddress'))
  //     );
  // }
  //
  // /** DELETE: delete the user's address from the server */
  // deleteAddress(id: number): Observable<Address> {
  //   const url = `${this.apiURL}/${id}`;
  //
  //   return this.http.delete<Address>(url, this.httpOptions)
  //     .pipe(
  //       tap(_ => console.log(`Deleted address with id = ${id}`)),
  //       catchError(this.handleError<Address>('deleteAddress'))
  //     );
  // }
  //
  // /**
  //  * Handle Http operation that failed.
  //  * Let the app continue.
  //  *
  //  * @param operation - name of the operation that failed
  //  * @param result - optional value to return as the observable result
  //  */
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: HttpErrorResponse): Observable<T> => {
  //     switch (error.status) {
  //       case 0:
  //         // A client-side or network error occurred. Handle it accordingly.
  //         console.error('A client-side error occurred: ', error.error);
  //         break;
  //       case 404:
  //         // The backend returned an unsuccessful response code.
  //         // The response body may contain clues as to what went wrong.
  //         console.warn(`Backend returned code ${error.status}, body was: `, error.error);
  //         break;
  //       case 500:
  //         console.error('Something went wrong on the server!');
  //         break;
  //     }
  //
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }


}
