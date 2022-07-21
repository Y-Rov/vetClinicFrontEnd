import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as moment from "moment";
import { TokensResponse } from '../../models/operational-models/TokensResponse';
import jwtDecode from 'jwt-decode';
import { RegisterFormModel } from '../../models/operational-models/form-models/RegisterFormModel';
import { UserService } from 'src/app/features/userDashboard/services/userService/user.service';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private tokenUrl: string = 'http://localhost:7030/connect/token';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
  };
  login$: Subject<TokensResponse> = new Subject<TokensResponse>();

  constructor(private http: HttpClient, private userService: UserService) {
  }

  public login(email:string, password:string ): Observable<TokensResponse> {
    let body = new URLSearchParams();
    body.set('username', email);
    body.set('password', password);
    body.set('grant_type', "password");
    body.set('client_id', "angular_client");
    body.set('client_secret', "angular_client_secret");
    body.set('scope', 'apiAccess offline_access');

    return this.http.post<TokensResponse>(this.tokenUrl, body, this.httpOptions).pipe(
      tap(tokenResponse => {
        this.setSession(tokenResponse);
        this.login$.next(tokenResponse);
      })
    );
  }

  public register(registerForm : RegisterFormModel) : Observable<User> {
    return this.userService.registerClient(registerForm)
  }
  
  public sendRefreshRequest(refreshToken:string){
    let body = new URLSearchParams();
    body.set('grant_type', "refresh_token");
    body.set('client_id', "angular_client");
    body.set('client_secret', "angular_client_secret");
    body.set('refresh_token', refreshToken);
    body.set('scope', 'apiAccess offline_access') 

    return this.http.post<TokensResponse>(this.tokenUrl, body, this.httpOptions)
  }

  private setSession(response:TokensResponse) {
        const tokenResponse = response as TokensResponse;
        const expiresAt = moment().add(tokenResponse.expires_in,'second');

        localStorage.setItem('access_token', tokenResponse.access_token);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
        localStorage.setItem('token_type', tokenResponse.token_type);

        if (tokenResponse.refresh_token != null)
          localStorage.setItem('refresh_token', tokenResponse.refresh_token);
  }          

  logout() {
      localStorage.removeItem('access_token');
      localStorage.removeItem('expires_at');
      localStorage.removeItem('token_type');
      localStorage.removeItem('refresh_token');
  }

  public getUserId(){
    const tokenStr = localStorage.getItem('access_token');
    if (tokenStr != null){
        try{
          const bearerToken : any = jwtDecode(tokenStr);
          return bearerToken.sub;
        }
        catch(err){
          return null;
        }
    }
  }

  public getRole(){
    const tokenStr = localStorage.getItem('access_token');
    if (tokenStr != null){
        try{
          const bearerToken : any = jwtDecode(tokenStr);
          return bearerToken.role;
        }
        catch(err){
          return null;
        }
    }
  }

  public isInRole(role:string){
    return role === this.getRole();
  }

  public getAccessToken(){
    return localStorage.getItem('access_token');
  }

  public setAccessToken(accessToken:string){
    localStorage.setItem('access_token', accessToken);
  }

  public setRefreshToken(refreshToken:string){
    localStorage.setItem('refresh_token', refreshToken);
  }

  public getRefreshToken(){
    return localStorage.getItem('refresh_token');
  }

  public isAuthorized() {
    const isExists = localStorage.getItem('access_token') != null;
    return isExists && moment().isBefore(this.getExpiration());
  }

  getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      if (expiration != null){
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
      }
      return null;
  }    
}