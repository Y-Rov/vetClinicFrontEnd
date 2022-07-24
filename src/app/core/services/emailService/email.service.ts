import { Injectable } from '@angular/core';
import {ResourceService} from "../resourceService/resource.service";
import {EmailMessage} from "../../models/emailMessage";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
@Injectable({
  providedIn: 'root'
})
export class EmailService extends ResourceService<EmailMessage>{
  constructor(
    private httpClient: HttpClient,
    private currentLocation: Location
  ) {
    super(httpClient, currentLocation, EmailMessage, 'https://localhost:5001/api/email');
  }

  send(email : EmailMessage){
    this.create(email);
  }
}
