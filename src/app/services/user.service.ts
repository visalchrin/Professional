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

  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
  ) { }

  getUserDetailInfo(username: string){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: `bearer ${this.cookieService.get('access_token')}`
        Authorization: `bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.get(
      HOST_URL + `/user?username=${username}`,
      httpOptions
    );
  }
}
