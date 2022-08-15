import { importProvidersFrom, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://dev.api.bookandgo.oskar.com.pl/api/';
const httpOptions = {
  withCredentials: false,
  headers: new HttpHeaders({ 'Content-type': 'application/json', "Access-Control-Allow-Origin": "**" })
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'token/',
      {
        email,
        password,
      },
      httpOptions
    ); 
  }
  
  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'logout/', { }, httpOptions);
  }
}