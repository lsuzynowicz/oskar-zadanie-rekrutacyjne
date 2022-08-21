import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private url = 'https://dev.api.bookandgo.oskar.com.pl/api/location/';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){    
    return this.httpClient.get<any>(this.url);
  }
  

}
