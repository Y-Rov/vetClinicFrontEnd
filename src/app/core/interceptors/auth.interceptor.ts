import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../services/authService/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authService: AuthService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
    let tokenizedReq = req;
    const accessToken = this.authService.getAccessToken();
    if (accessToken != null) {
      tokenizedReq = this.addTokenHeader(req, accessToken);
    }

    return next.handle(tokenizedReq).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && !tokenizedReq.url.includes('connect/token') && error.status === 401) {
        return this.handle401Error(tokenizedReq, next);
      }
      return throwError(error);
    }));
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      const refreshToken = this.authService.getRefreshToken();
      if (refreshToken) 
        return this.authService.sendRefreshRequest(refreshToken).pipe(
          switchMap((response: any) => {
            this.isRefreshing = false;
            this.authService.setAccessToken(response.accessToken);
            this.authService.setRefreshToken(response.refreshToken);
            this.refreshTokenSubject.next(response.accessToken);
            return next.handle(this.addTokenHeader(request, response.accessToken));
          }),
          catchError((err) => {
            this.isRefreshing = false;
            this.authService.logout();
            return throwError(err);
          })
        );
    }
    return this.refreshTokenSubject.pipe(
      filter(token => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
    );
  }
  private addTokenHeader(request: HttpRequest<any>, accessToken: string) {
    return request.clone({
      headers: request.headers.set("Authorization", "Bearer " + accessToken)
  });
  }
}
