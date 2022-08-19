import { importProvidersFrom, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../_services/storage.service';
const AUTH_API = 'https://dev.api.bookandgo.oskar.com.pl/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json', "Access-Control-Allow-Origin": "*"})
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private storageService: StorageService) {}
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
    return this.http.post(AUTH_API + 'token/', { }, httpOptions);
  }
  
  refreshToken(token: string) {
    return this.http.post(AUTH_API + 'token/', {
      refreshToken: token
    }, httpOptions);
  }

}