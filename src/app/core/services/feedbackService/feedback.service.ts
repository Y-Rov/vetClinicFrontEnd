import { Injectable } from '@angular/core';
import {ResourceService} from "../resourceService/resource.service";
import {Feedback} from "../../models/Feedback";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {catchError, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService extends ResourceService<Feedback> {

  constructor(
    private httpClient: HttpClient,
    private currentLocation: Location
  ) {
    super(httpClient, currentLocation, Feedback, 'https://localhost:5001/api/feedback');
  }

  getFeedbacks(skipCount: number = 0, takeCount: number = 1, filter: string | null = null): Observable<Feedback[]> {
    let url: string =
      filter != null ?
        `${this.apiUrl}?filterParam=${filter}&takeCount=${takeCount}&skipCount=${skipCount}`
        : `${this.apiUrl}?takeCount=${takeCount}&skipCount=${skipCount}`;

    return this.http.get<Feedback[]>(url)
      .pipe(
        map((result) => result.map((i) => new this.tConstructor(i))),
        catchError(this.handleError<Feedback[]>('getAll', []))
      );
  }
}
