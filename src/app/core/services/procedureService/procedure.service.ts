import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address} from "../../models/Address";
import { Location } from "@angular/common";
import { Procedure } from '../../models/Procedure';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { ResourceService } from '../resourceService/resource.service';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService extends ResourceService<Procedure> {

  constructor(
    private httpClient: HttpClient,
    private currentLocation: Location
  ) {
    super(httpClient, currentLocation, Procedure, 'https://localhost:5001/api/procedures');
  }

  /*getProcedures(): Observable<Procedure[]>{
    return this.http?.get<Procedure[]>(this.apiUrl, this.httpOptions);
  }

  deleteProcedure(procedure : Procedure): Observable<Procedure>{
    const url = `${this.apiUrl}/${procedure.id}`;
    return this.http.delete<Procedure>(url);
  }

  deleteProcedureById(id: number): Observable<Procedure>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Procedure>(url);
  }

  
  addProcedure(procedure: Procedure): Observable<Procedure>{
    return this.http.post<Procedure>(this.apiUrl, procedure, this.httpOptions);
  }*/

  updateProcedure(procedure: Procedure): Observable<Procedure>{
    const ViewModel = {
      id: procedure.id,
      name: procedure.name,
      cost: procedure.cost,
      durationInMinutes: procedure.durationInMinutes,
      description: procedure.description,
      specializationIds: procedure.specializations!.map(spec => spec.id)
    };
    return this.httpClient.put<Procedure>(this.apiUrl, ViewModel, this.httpOptions);
  }
}
