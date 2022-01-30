import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = "https://professional-career.herokuapp.com/api/comment";

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  createComment(data: any) {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.post(
      this.url + "/add",
      data,
      httpOptions
    );
  }

  getCommentsByPostId(postId: string) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.get(
      this.url + `/getCommentByPostId?Id=${postId}`,
      httpOptions
    );
  }
}
