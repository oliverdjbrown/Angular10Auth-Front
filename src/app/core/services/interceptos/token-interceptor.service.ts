import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req, next): Observable<any> {
    const token = this.authService.getToken();
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token
      }
    });
    return next.handle(tokenizedReq);
  }
}
