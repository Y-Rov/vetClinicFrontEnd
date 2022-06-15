import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";
import { Address} from "../../models/Address";
import { Location } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private apiURL: string = 'https://62a83e00943591102b9d0fd0.mockapi.io/api/address';
  constructor(
    private http: HttpClient,
    private location: Location
  ) { }

  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(this.apiURL)
      .pipe(
        tap(_ => console.log('Fetched addresses')),
        catchError(this.handleError<Address[]>('getAddresses', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getAddress(id: number): Observable<Address> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Address>(url)
      .pipe(
        tap(_ => console.log(`Fetched address with id = ${id}`)),
        catchError(this.handleError<Address>(`getAddress id = ${id}`))
      );
  }

  /** POST: add a new hero to the server */
  addAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(this.apiURL, address, this.httpOptions)
      .pipe(
        tap((newAddress: Address) => console.log(`Added address with id = ${newAddress.userId}`)),
        catchError(this.handleError<Address>('addAddress'))
      );
  }

  /** PUT: update the hero on the server */
  updateAddress(address: Address): Observable<any> {
    const url = `${this.apiURL}/${address.userId}`;
    return this.http.put(url, address, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Updated address with id = ${address.userId}`)),
        catchError(this.handleError<any>('updateAddress'))
      );
  }

  /** DELETE: delete the hero from the server */
  deleteAddress(id: number): Observable<Address> {
    const url = `${this.apiURL}/${id}`;

    return this.http.delete<Address>(url, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Deleted address with id = ${id}`)),
        catchError(this.handleError<Address>('deleteAddress'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  goToPreviousPage(): void {
    this.location.back();
  }
}