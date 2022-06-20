import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Animal} from "../../models/Animal";
import { ResourceService } from "../resourceService/resource.service";
import { Location } from "@angular/common";
import {AuthService} from "../authService/auth.service";
import {Appointment} from "../../models/Appointment";

@Injectable({
  providedIn: 'root'
})
export class AnimalService extends ResourceService<Animal>{

  constructor(
    private httpClient: HttpClient,
    private currentLocation: Location,
    private authService : AuthService)
  {
    super(httpClient,currentLocation,Animal,'https://localhost:5001/api/animals');
  }

  createAnimal(newAnimal :Animal) : Observable<Animal>{
    const animalVM = {
      id: newAnimal.id,
      ownerId: this.authService.getUserId(),
      nickName: newAnimal.nickName,
      birthDate: newAnimal.birthDate
    };

    return this.httpClient.post<Animal>(this.apiUrl,animalVM,this.httpOptions)
      .pipe(
        catchError(this.handleError<Animal>('createAnimal'))
      );
  }

  updateAnimal(newAnimal : Animal) : Observable<Animal>{
    const animalVM = {
      id: newAnimal.id,
      ownerId: this.authService.getUserId(),
      nickName: newAnimal.nickName,
      birthDate: newAnimal.birthDate
    };

    return this.httpClient.put<Animal>(this.apiUrl,animalVM,this.httpOptions)
      .pipe(
        catchError(this.handleError<Animal>('createAnimal'))
      );
  }

  getMedCard(id:number) : Observable<any>{
    const url = `${this.apiUrl}/medcard/${id}`;
    return this.httpClient.get(url, this.httpOptions);
  }

  /*
  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl,this.httpOption)
      .pipe(
        tap(_ => console.log('Fetched animals')),
        catchError(this.handleError<Animal[]>('getAnimals',[]))
      );
  }

  addAnimal(animal : Animal) : Observable<Animal> {
    return this.http.post<Animal>(this.apiUrl,animal,this.httpOption)
      .pipe(
        tap(_ =>console.log("Animal")),
        catchError(this.handleError<Animal>('addAnimal'))
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

  deleteAnimal(id: number): Observable<Animal> {
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
  }*/
}
