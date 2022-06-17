import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Specialization} from "../../models/Specialization";

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  url: string = "https://localhost:7283/api/specialization";

  constructor(private httpClient : HttpClient) { }

  getAll() : Observable<Specialization[]>{
    let result: Observable<Specialization[]> =
      this.httpClient.get<Specialization[]>(this.url);
    return result;
  }
}
