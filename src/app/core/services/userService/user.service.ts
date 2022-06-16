import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/User';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'https://62a66c1d430ba53411d495fe.mockapi.io/api/users';
  // private url: string = 'https://localhost:7283/api/users';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
    private location: Location) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUserById(id: number): Observable<User> {
    const userUrl = `${this.url}/${id}`;
    return this.http.get<User>(userUrl);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user, this.httpOptions);
  }

  updateUser(user: User): Observable<User> {
    const userUrl = `${this.url}/${user.id}`;
    return this.http.put<User>(userUrl, user, this.httpOptions);
  }

  deleteUser(user: User): Observable<User> {
    const userUrl = `${this.url}/${user.id}`;
    return this.http.delete<User>(userUrl, this.httpOptions);
  }

  goToPreviousPage(): void {
    this.location.back();
  }
}
