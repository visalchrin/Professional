import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private url = "https://professional-career.herokuapp.com/api/search";

  constructor(
    private cookieService: CookieService,
    private http: HttpClient
  ) { }

  search(data: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.post(
      this.url,
      data,
      httpOptions
    );
  }

}
