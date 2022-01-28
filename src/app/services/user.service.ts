import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
// import { User } from '../Models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // url: string = "http://localhost:9093/api/users";
  url: string = "http://localhost:9093/api/profile?username=";

  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
  ) { }


  editUserInfo(data:any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.post(
      "http://localhost:9093/api/profile/edit",
      data,
      httpOptions
    );
  }

  getUserDetailInfo(username: string){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.get(
      this.url + `${username}`,
      httpOptions
    );
  }

  getUserById(id: string) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.get(
      `http://localhost:9093/api/getUserById?id=${id}`,
      httpOptions
    );
  }
}
