import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Animal} from "../../../core/models/Animal";
import { ResourceService } from "../../../core/services/resourceService/resource.service";
import { Location } from "@angular/common";
import {AuthService} from "../../../core/services/authService/auth.service";

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
      birthDate: newAnimal.birthDate,
      PhotoUrl: newAnimal.photoUrl
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
      birthDate: newAnimal.birthDate,
      PhotoUrl: newAnimal.photoUrl
    };

    return this.httpClient.put<Animal>(this.apiUrl,animalVM,this.httpOptions)
      .pipe(
        catchError(this.handleError<Animal>('updateAnimal'))
      );
  }

  getMedCard(id:number) : Observable<any>{
    const url = `${this.apiUrl}/medcard/${id}`;
    return this.httpClient.get(url, this.httpOptions);
  }

  getAllAnimals(id: number):Observable<any>{
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get(url,this.httpOptions);
  }
}
