import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
// import { User } from '../Models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "https://professional-career.herokuapp.com/api/profile?username=";

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
      "https://professional-career.herokuapp.com/api/profile/edit",
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
      `https://professional-career.herokuapp.com/api/getUserById?id=${id}`,
      httpOptions
    );
  }

  getAllUsers() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.get(
      `https://professional-career.herokuapp.com/api/getAllUsers`,
      httpOptions
    );
  }
}
