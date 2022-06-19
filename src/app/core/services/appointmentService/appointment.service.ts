 import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../../models/Appointment';


@Injectable({
  providedIn: 'root'
})

export class AppointmentService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private apiUrl : string = "https://62a9f6063b314385543f4974.mockapi.io/api/appointment/Appointments";

  constructor(private   http: HttpClient) { }

  getAppointments(): Observable<Appointment[]>{
    return this.http?.get<Appointment[]>(this.apiUrl, this.httpOptions);
  }

  addAppointment(appointment: Appointment): Observable<Appointment>{
    return this.http.post<Appointment>(this.apiUrl, appointment, this.httpOptions);
  }

  updateAppointment(appointment: Appointment): Observable<Appointment>{
    const url = `${this.apiUrl}/${appointment.id}`;
    return this.http.put<Appointment>(url, appointment, this.httpOptions);
  }

  deleteAppointmentById(id: number): Observable<Appointment>{
    const url = `${this.apiUrl}/${id}`;
    console.log(url);
    return this.http.delete<Appointment>(url);
  }
}
