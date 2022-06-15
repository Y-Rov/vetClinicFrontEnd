import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Animal} from "../../models/Animal";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  private apiUrl: string = 'https://6277a9bc2f94a1d70610db55.mockapi.io/animal';
  constructor(
    private http: HttpClient) { }

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
      .pipe(
        tap(_ => console.log('Fetched animals')),
        catchError(this.handleError<Animal[]>('getAnimals',[]))
      );
  }

  getAnimal(id:number):Observable<Animal>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Animal>(url)
      .pipe(
        tap(_ => console.log(`Animal with id = ${id}`)),
        catchError(this.handleError<Animal>(`getAnimal /w id = ${id}`))
      );
  }

  addAnimal(animal : Animal) : Observable<Animal> {
    return this.http.post<Animal>(this.apiUrl,animal,this.httpOption)
      .pipe(
        tap(_ =>console.log("Animal")),
        catchError(this.handleError<Animal>('addAddress'))
      );
  }

  updateAnimal(animal: Animal): Observable<Animal> {
    const url = `${this.apiUrl}/${animal.id}`;
    return this.http.put<Animal>(url, animal, this.httpOption)
      .pipe(
        tap(_ => console.log(`Updated animal with id`)),
        catchError(this.handleError<Animal>('updateAnimal'))
      );
  }

  deleteAddress(id: number): Observable<Animal> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Animal>(url, this.httpOption)
      .pipe(
        tap(_ => console.log(`Deleted animal with id = ${id}`)),
        catchError(this.handleError<Animal>('deleteAnimal'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
