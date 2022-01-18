import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import { NgModule } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'Form-BO-NewsCareer',
  templateUrl: './Form-BO-Newscareer.component.html',
  styleUrls: ['./Form-BO-Newscareer.component.scss']
})
export class FormBoNewsCareerComponent implements OnInit {
  formCreateNews: FormGroup;

  constructor(
    private fb: FormBuilder,
    private newsService: NewsService,
    private cookieService: CookieService,
    private router : Router
  ) {
    this.formCreateNews = fb.group(
      {
        title: new FormControl(null),
        image: new FormControl(null),
        content: new FormControl(null)
      }
    )
  }

  ngOnInit(): void {
  
  }

  onCreateNews(): void {
    this.newsService.createNews({
      title: this.formCreateNews.value.title,
      image: this.formCreateNews.value.image,
      content: this.formCreateNews.value.content,
      username: this.cookieService.get("username")
    }).subscribe((result: any) => {
      console.log(result);
      this.router.navigate([`/newsDetail/${result.id}`]);
    });
    
  }

}