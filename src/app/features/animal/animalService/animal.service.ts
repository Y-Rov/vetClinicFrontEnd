import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Animal} from "../../../core/models/Animal";
import { ResourceService } from "../../../core/services/resourceService/resource.service";
import { Location } from "@angular/common";
import {AuthService} from "../../../core/services/authService/auth.service";
import {AnimalParameters} from "../../../core/models/operational-models/QueryParameters/AnimalParameters";
import {saveAs} from "file-saver";

@Injectable({
  providedIn: 'root'
})
export class AnimalService extends ResourceService<Animal>{

  httpOptionss = {
    headers: new HttpHeaders({
      'Content-Type': 'application/pdf',
    }),
  };

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

  getMedCard(id:number, pageNumber: number = 1, pageSize: number = 5) : Observable<AnimalParameters>{
    const url = `${this.apiUrl}/medcard/?pageNumber=${pageNumber}&pageSize=${pageSize}&animalId=${id}`;
    return this.httpClient.get<AnimalParameters>(url, this.httpOptions);
  }

  getPDF(id:number, pageNumber: number = 1, pageSize: number = 5) {
    const url = `${this.apiUrl}/generatePDF/?pageNumber=${pageNumber}&pageSize=${pageSize}&animalId=${id}`;
    this.httpClient.get(url,{responseType:'blob'}).subscribe(blob=>{
      saveAs(blob,'myFile.pdf');
    });
   // return this.httpClient.post<Blob>(url,{responseType:'blob'});
  }

  getAllAnimals(id: number):Observable<any>{
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get(url,this.httpOptions);
  }
}
