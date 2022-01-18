import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HOST_URL } from '../constaint/hostUrl';
import { User } from '../Models/userModel';
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

  getUserDetailInfo(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.get(
      this.url + `${this.cookieService.get('username')}`,
      httpOptions
    );
  }
}
