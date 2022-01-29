import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  private url = "http://localhost:9093/api/salary";

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  addNewSalary(data: any) {
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
}
