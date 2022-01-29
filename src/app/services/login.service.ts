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

  url: string = "http://localhost:9093/api";
  data: any;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private route: Router) { }

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
          this.startRefreshTokenTimer();
        }
      });
  }

  // helper methods

  private refreshTokenTimeout : any;

  private startRefreshTokenTimer() {
      // parse json object from base64 encoded jwt token
      //const jwtToken = JSON.parse(atob(this.data));

      // set a timeout to refresh the token a minute before it expires
      //const expires = new Date(jwtToken.exp * 1000);
     //const expires = new Date(10 * 60 * 1000);
      const timeout = 10 * 60 * 1000 - Date.now() - (60 * 1000);
      this.refreshTokenTimeout = setTimeout(() => this.refreshToken(), timeout);
  }

  private stopRefreshTokenTimer() {
      clearTimeout(this.refreshTokenTimeout);
  }
  // end

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
      this.startRefreshTokenTimer();
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
    this.stopRefreshTokenTimer();
    this.cookieService.deleteAll();
    this.route.navigate(['/']);
  }


}
