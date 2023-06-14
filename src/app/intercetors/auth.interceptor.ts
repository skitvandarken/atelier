import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Token } from '@angular/compiler';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  refresh = false
  constructor(private authservice : AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      setHeaders:{
        
        Authorization: `Bearer ${this.authservice.accetoken}`
      }
    });

    return next.handle(req).pipe(catchError( (err: HttpErrorResponse) =>{
      if ( err.status === 401 && !this.refresh){
        this.refresh = true

        return this.authservice.refresh().pipe(
          
          switchMap( (res:any) => {
            
            this.authservice.accetoken = res.token;

            return next.handle(request.clone({
              setHeaders:{
                Authorization: `Bearer ${this.authservice.accetoken}`
              }
            }));
          })
        );
      }

      this.refresh = false
      return throwError(() => err);
    }));
    
  }
}
