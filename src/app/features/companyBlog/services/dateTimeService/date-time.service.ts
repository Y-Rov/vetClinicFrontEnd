import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor() { }

  public getTimeString(date: Date): string{
    let m = date.getMinutes();
    let h = date.getHours();
    return `${(h>9 ? '' : '0') + h}:${(m>9 ? '' : '0') + m}`;
  }

  getDateTimeString(date: Date): string{
    let tempDate = new Date(date);
    let now = new Date();
    if(now.getFullYear() == tempDate.getFullYear())
      return (this.getTimeString(tempDate) + " " + this.getDateString(tempDate, false))
    return this.getTimeString(tempDate) + " " + this.getDateString(tempDate, true);
  }

  public getDateString(date: Date, includeYear: boolean): string{
    let m = date.getMonth() + 1;
    let d = date.getDate();

    if(includeYear)
      return `${(d>9 ? '' : '0') + d}.${(m>9 ? '' : '0') + m}.${date.getFullYear()}`;
    return `${(d>9 ? '' : '0') + d}.${(m>9 ? '' : '0') + m}`;

  }
}
