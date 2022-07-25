import { Injectable } from '@angular/core';
import {ResourceService} from "../resourceService/resource.service";
import {EmailMessage} from "../../models/emailMessage";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Location} from "@angular/common";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class EmailService{

  apiUrl : string = "https://localhost:5001/api/email";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  send(email : EmailMessage) : Observable<EmailMessage>{
    return this.httpClient.post<EmailMessage>(this.apiUrl,email, this.httpOptions);
  }
}
