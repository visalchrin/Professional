import { NewsService } from './../../services/news.service';
import { Component } from '@angular/core';

@Component({
  selector: 'BO-NewsCareer',
  templateUrl: './BO-newscareer.component.html',
  styleUrls: ['./BO-newscareer.component.scss']
})
export class BoNewsCareerComponent {
  articles: any;

  constructor(
    private newsService: NewsService
  ) {
    this.newsService.getAllNews().subscribe((articles) => {
      this.articles = articles;
      console.log(articles);
    });
  }
  
}