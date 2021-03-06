import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../Models/userModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  @Output() isAuthenticatedEvent : EventEmitter<any> = new EventEmitter();

  url: string = "https://professional-career.herokuapp.com/api";
  data: any;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private route: Router) {

      var refresh = setInterval(() => { 
        this.refreshToken();
      }, 9 * 60 * 1000);
      
     }

  login(auth: any): void {

    this.isAuthenticatedEvent.emit();
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic Y2xpZW50OnBhc3N3b3Jk',
      }),
      body: null,
      params: new HttpParams(),
    };

    const body = new URLSearchParams();
    body.set('username', auth.username);
    body.set('password', auth.password);

    this.http
      .post(
        this.url + "/login",
        body.toString(),
        httpOptions
      )
      .subscribe((result: any) => {
        console.log(result.access_token);
        if (result.access_token == null) {
          console.log("Login is incompleted.");
        } else {
          this.data = result;
          this.cookieService.set('access_token', result.access_token);
          this.cookieService.set('refresh_token', result.refresh_token);
          this.cookieService.set('username', result.username);
          this.route.navigate(["feed"]);
          window.location.reload();
        }
      });
  }




  refreshToken():void {
    console.log("resfresh token is called");

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('refresh_token')}`
      }),
    };
    this.http.get(
      this.url + "/token/refresh",
      httpOptions
    ).subscribe((result: any) => {
      this.cookieService.set("access_token", result.access_token);
      this.cookieService.set("refresh_token", result.refresh_token);
      console.log(this.cookieService.get("access_token"));
    });
  }

  register(user: User): void {
    console.log(user.fullname);
    this.http.post(
      this.url + "/register",
      user
    ).subscribe(result => {
      console.log(result);
    });
  }

  isAuthenticated(): boolean {
    const accessToken = this.cookieService.get('access_token');
    //const accessToken = localStorage.getItem('access_token');
    return !(accessToken === null || accessToken === '' || accessToken === undefined);
  }

  logout() {
    this.cookieService.deleteAll();
    this.route.navigate(['/']);
  }


}
