import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-adding-record',
  templateUrl: './adding-record.component.html',
  styleUrls: ['./adding-record.component.css']
})
export class AddingRecordComponent{
  posts = new Array<any>();
  url = "https://dev.api.bookandgo.oskar.com.pl/api/location/";
  constructor(private httpClient:HttpClient, private service:PostService) { }

  ngOnInit(): void {
    this.service.getPosts()
        .subscribe(response => {
          this.posts = response.results;
        });

       } 

  onSubmit(data: any){
    this.httpClient.post<any>(this.url, data)
    .subscribe( response =>{
      this.posts = response.results;
    })
  }
}
