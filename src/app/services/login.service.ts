import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  @Output() isAuthenticatedEvent : EventEmitter<any> = new EventEmitter();

  url: string = "http://localhost:9093/api/login";

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private route: Router) { }

  login(auth: any) {
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
        this.url,
        body.toString(),
        httpOptions
      )
      .subscribe((result: any) => {
        console.log(result.access_token);
        if (result.access_token == null) {
          console.log("Login is incompleted.");
        } else {
          this.cookieService.set('access_token', result.access_token);
          this.route.navigate(["feed"]);
          this.isAuthenticatedEvent.emit();
        }
        
        //localStorage.setItem('access_token', result.access_token);
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
