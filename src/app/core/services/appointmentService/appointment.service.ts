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

  private apiUrl : string = "https://localhost:5001/api/appointments";

  constructor(private   http: HttpClient) { }

  getAppointments(): Observable<Appointment[]>{
    return this.http?.get<Appointment[]>(this.apiUrl, this.httpOptions);
  }

  addAppointment(appointment: Appointment): Observable<Appointment>{
    return this.http.post<Appointment>(this.apiUrl, appointment, this.httpOptions);
  }

  updateAppointment(appointment: Appointment): Observable<Appointment>{
    const ViewModel = {
      id: appointment.id,
      disease: appointment.disease,
      meetHasOccureding: appointment.meetHasOccureding,
      procedureIds: appointment.procedures.map(proc => proc.id),
      userIds:appointment.users.map(user=>user.id)
    }
    return this.http.put<Appointment>(this.apiUrl, appointment, this.httpOptions);
  }

  deleteAppointmentById(id: number): Observable<Appointment>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Appointment>(url);
  }
}
