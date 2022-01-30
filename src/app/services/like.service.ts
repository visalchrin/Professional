import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private url = "https://professional-career.herokuapp.com/api/like";

  constructor(
    private cookieService: CookieService,
    private http: HttpClient
  ) { }

  like(data: any) {
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


  unlike(data: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.post(
      this.url + "/unlike",
      data,
      httpOptions
    );
  }
}
