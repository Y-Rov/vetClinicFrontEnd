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
    let d = new Date(date);
    let now = new Date();
    if(now.getFullYear() == d.getFullYear())
      return (this.getTimeString(d) + " " + this.getDateString(d)).slice(0, 11)
    return this.getTimeString(d) + " " + this.getDateString(d);
  }

  public getDateString(date: Date): string{
    let m = date.getMonth() + 1;
    let d = date.getDate();

    return `${(d>9 ? '' : '0') + d}.${(m>9 ? '' : '0') + m}.${date.getFullYear()}`;
  }
}
