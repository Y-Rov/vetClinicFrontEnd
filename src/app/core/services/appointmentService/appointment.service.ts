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

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   }),
  // };

  // private apiUrl : string = "https://localhost:5001/api/appointments";
  // private apiUrl : string = "https://62a9f6063b314385543f4974.mockapi.io/api/appointment/";


  constructor(
    private httpClient: HttpClient,
    private currentLocation: Location
  ) {
    super(httpClient, currentLocation, Appointment, 'https://localhost:5001/api/appointments');
  }

  // getAppointments(): Observable<Appointment[]>{
  //   return this.http?.get<Appointment[]>(this.apiUrl + "appointmentsTest", this.httpOptions);
  // }

  // addAppointment(appointment: Appointment): Observable<Appointment>{
  //   return this.http.post<Appointment>(this.apiUrl, appointment, this.httpOptions);
  // }
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
    return this.http.put<Appointment>(this.apiUrl, ViewModel, this.httpOptions)
    .pipe(
      map((result) => new this.tConstructor(result)),
      catchError(this.handleError<Appointment>('getById'))
    )
  }

  // updateAppointment(appointment: Appointment): Observable<Appointment>{
  //   const url = `${this.apiUrl}/${appointment.id}`;
  //   return this.http.put<Appointment>(url, appointment, this.httpOptions);
  // }

  // deleteAppointmentById(id: number): Observable<Appointment>{
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.delete<Appointment>(url);
  // }
}
