import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Specialization} from "../../models/Specialization";
import {ResourceService} from "../resourceService/resource.service";
import {Location} from "@angular/common";
import {catchError} from "rxjs/operators";
import {Procedure} from "../../models/Procedure";

@Injectable({
  providedIn: 'root'
})
export class SpecializationService extends ResourceService<Specialization>{

  constructor(private httpClient : HttpClient,
              private currentLocation: Location) {
    super(httpClient, currentLocation, Specialization, "https://localhost:5001/api/specialization");
  }

  removeProcedure(procedureId: number, specializationId: number) : Observable<void>{
    const requestUrl = `${this.apiUrl}/removeProc/${specializationId}/${procedureId}`;
    return this.http.put<void>(requestUrl, this.httpOptions)
      .pipe(
        catchError(this.handleError<void>('delete'))
      );
  }

  addProcedures(specialization : Specialization) : Observable<void>{
    const requestUrl = `${this.apiUrl}/addProcedures/${specialization.id}`;
    const viewModel = {
      id: specialization.id,
      name: specialization.name,
      procedureIds: specialization.procedures!.map(procedure => procedure.id)
    };
    return this.http.put<void>(requestUrl,viewModel,this.httpOptions)
      .pipe(
        catchError(this.handleError<void>('update'))
      );
  }

  addUser(specialization: Specialization) : Observable<void>{
    const  requestUrl = `${this.apiUrl}/addUsers/${specialization.id}`;
    const viewModel = {
      id: specialization.id,
      name: specialization.name,
      userIds: specialization.users!.map(user => user.id)
    };

    return this.http.put<void>(requestUrl,viewModel, this.httpOptions)
      .pipe(
        catchError(this.handleError<void>('update'))
      );
  }

  // getA;l() : Observable<Specialization[]>{
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
