import { HOST_URL } from './../constaint/hostUrl';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url: string = "https://professional-career.herokuapp.com/api/";
  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  createNews(data: any) {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.post(
      this.url + "news/create",
      data,
      httpOptions
    );
  }

  getPopularArticles() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.get(
      this.url + "news/article/popularity",
      httpOptions
    );
  }

  getAllNews() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.get(
      this.url + "news/getAllNews",
      httpOptions
    );
  }

  getNewsById(id: any) {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.get(
      this.url + `news/article?Id=${id}`,
      httpOptions
    );
  }

  deleteNewsById(data: any) {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.post(
      "https://professional-career.herokuapp.com/api/news/delete",
      data,
      httpOptions
    );
  }

  getAllNewsByUsername(data: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('access_token')}`
      }),
    };
    return this.http.post(
      "https://professional-career.herokuapp.com/api/news/getAllNewsByUsername",
      data,
      httpOptions
    );
  }

}
