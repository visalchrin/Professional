import { NewsService } from './../../services/news.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news-career',
  templateUrl: './news-career.component.html',
  styleUrls: ['./news-career.component.scss']
})
export class NewsCareerComponent {

  articles: any;
 
  constructor(private router: Router, private newsService: NewsService) {
    this.newsService.getAllNews().subscribe((articles)=> {
      this.articles = articles;
    });
  }

  clickDetail(id: string) {
    console.log(id);
    this.router.navigate([`newsDetail/${id}`]);
  }
}