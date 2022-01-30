import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = "https://professional-career.herokuapp.com/api/";
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private userService: UserService
  ) { }

  getAllPosts() {
    
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.get(
      this.url + "post/getAllPosts",
      httpOptions
    );
  }
  createPost(data: any) {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.post(
      this.url + "post/create",
      data,
      httpOptions
    );
  }

  getAllPostByOwnerId(username: string) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.get(
      this.url + `post/getAllPostsByOwnerId?username=${username}`,
      httpOptions
    );
  }

  getAllPostFromFollowing() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.get(
      this.url + `post/getPostFromFollowing?username=${this.cookieService.get("username")}`,
      httpOptions
    );
  }

}
