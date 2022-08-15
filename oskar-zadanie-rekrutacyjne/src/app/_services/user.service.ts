import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'https://dev.api.bookandgo.oskar.com.pl/api/';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'location', { responseType: 'text' });
  }
}
