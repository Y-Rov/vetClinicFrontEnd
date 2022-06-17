import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Specialization} from "../../models/Specialization";
import {ResourceService} from "../resourceService/resource.service";
import {Location} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class SpecializationService extends ResourceService<Specialization>{

  constructor(private httpClient : HttpClient,
              private currentLocation: Location) {
    super(httpClient, currentLocation, Specialization, "https://localhost:5001/api/specialization");
  }

  // getAll() : Observable<Specialization[]>{
  //   let result: Observable<Specialization[]> =
  //     this.httpClient.get<Specialization[]>(this.url);
  //   return result;
  // }
  //
  // add(specialization: Specialization) : Observable<Specialization>{
  //   return this.httpClient.post<Specialization>(this.url, specialization, this.httpOptions);
  // }
  //
  // delete(specializationId: number)
}
