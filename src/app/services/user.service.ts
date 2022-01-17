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
  url: string = "http://localhost:9093/api/users/?username=";

  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
  ) { }

  getUserDetailInfo(username: string){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: `bearer ${this.cookieService.get('access_token')}`
        Authorization: `Bearer  ${this.cookieService.get('access_token')}`
        //Authorization: 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYXJha29rIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6OTA5My9hcGkvbG9naW4iLCJleHAiOjE2NDIzNDcwODJ9._DR7zrHJJoQ-8UQy5k5IHWXuuk4-iWi5E1BQE1CtSmo'
      }),
    };
    return this.http.get(
      this.url + `${this.cookieService.get('username')}`, {

      }
    );
  }
}
