import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { PostService } from '../_services/post.service';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faTrash = faTrash;
  content?: string;
  posts = new Array<any>();
  status!: string;
  constructor(private userService: UserService, private service:PostService, private httpClient: HttpClient) { }
   ngOnInit(): void {
     this.service.getPosts()
         .subscribe(response => {
           this.posts = response.results;
         });
 
        } 

        deleteRecord(id: number){
          this.httpClient.delete('https://dev.api.bookandgo.oskar.com.pl/api/location/' + id)
        .subscribe(() => console.log('Pomyślnie usunięto :)'));
        }
      }
