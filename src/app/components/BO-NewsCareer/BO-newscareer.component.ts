import { NewsService } from './../../services/news.service';
import { Component } from '@angular/core';

@Component({
  selector: 'BO-NewsCareer',
  templateUrl: './BO-newscareer.component.html',
  styleUrls: ['./BO-newscareer.component.scss']
})
export class BoNewsCareerComponent {
  articles: any;
  loading: boolean = true;

  constructor(
    private newsService: NewsService
  ) {
    this.newsService.getAllNews().subscribe((articles) => {
      this.articles = articles;
      this.loading = false;
      console.log(articles);
    });
  }

  onDeleteNews(newsId: string) {
    this.newsService.deleteNewsById({id: newsId}).subscribe((data) => {
      this.articles = this.articles.filter((n: any) => n.id != newsId);
    });
  }
  
}