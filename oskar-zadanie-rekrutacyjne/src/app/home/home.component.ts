import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { PostService } from '../_services/post.service';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  posts = new Array<any>();
  constructor(private userService: UserService, private service:PostService, private httpClient: HttpClient) { }
   ngOnInit(): void {
     this.service.getPosts()
         .subscribe(response => {
           this.posts = response.results;
         });
 
        } 

      
      }
