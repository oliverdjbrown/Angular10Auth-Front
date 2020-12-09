import { Router } from '@angular/router';
import { UserI } from '../../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = 'http://localhost:3000/api/register';
  private loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient,
              private router: Router) { }

  registerUser(user: UserI): Observable<UserI> {
    return this.http.post<UserI>(this.registerUrl, user);
  }

  loginUser(user: UserI): Observable<UserI> {
    return this.http.post<UserI>(this.loginUrl, user);
  }

  loggeIn(): boolean {
    return !! localStorage.getItem('token');
  }

  logoutUser(): void {
   localStorage.removeItem('token') ;
   this.router.navigate(['/events']);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
