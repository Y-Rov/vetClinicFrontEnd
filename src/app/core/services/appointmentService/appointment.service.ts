import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Appointment } from '../../models/Appointment';
import { Location } from "@angular/common";
import { ResourceService } from '../resourceService/resource.service';


@Injectable({
  providedIn: 'root'
})

export class AppointmentService extends ResourceService<Appointment>{

 

  constructor(
    private httpClient: HttpClient,
    private currentLocation: Location
  ) {
    super(httpClient, currentLocation, Appointment, 'https://localhost:5001/api/appointments');
  }

  addAppointment(appointment: Appointment): Observable<Appointment>{
    console.log(appointment);
    const viewModel = {

      disease: appointment.disease,
      meetHasOccureding: false,
      animalId: appointment.animal?.id,
      date: appointment.dateAndTime,
      procedureIds: appointment.procedures?.map(proc => proc.id),
      userIds:appointment.users?.map(user=>user.id)
    }
    console.log(viewModel);
    return this.http.post<Appointment>(this.apiUrl, viewModel, this.httpOptions)
    .pipe(
      map((result) => new this.tConstructor(result)),
      catchError(this.handleError<Appointment>('getById'))
    );
  }


  updateAppointment(appointment: Appointment): Observable<Appointment>{
    const ViewModel = {

      id: appointment.id,
      disease: appointment.disease,
      meetHasOccureding: appointment.meetHasOccureding,
      date: appointment.dateAndTime!,
      animalId: appointment.animal?.id,
      procedureIds: appointment.procedures?.map(proc => proc.id),
      userIds:appointment.users?.map(user=>user.id)
    }
    console.log(ViewModel);
    return this.http.put<Appointment>(this.apiUrl, ViewModel, this.httpOptions)
    .pipe(
      map((result) => new this.tConstructor(result)),
      catchError(this.handleError<Appointment>('updateAppointment'))
    )
  }

}
