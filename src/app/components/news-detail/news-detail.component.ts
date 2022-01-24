import { UserService } from './../../services/user.service';
import { NewsService } from './../../services/news.service';
import { marked } from 'marked';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  article: any;
  publisher: string = '';
  id: string|null = '';
  // public quote: string = '***Make right desire and he will approach you in the highest way.***';
  // public question: string = '*This is emphasized text!*';
  text: string = "";
  constructor(private newsService: NewsService,
    private userService: UserService,
    private route: ActivatedRoute) {
      let id: string = '';
      if (this.route.snapshot.paramMap.get("id") != null) {
        this.id  = this.route.snapshot.paramMap.get("id");
        console.log(this.id);
        this.newsService.getNewsById(this.id).subscribe((article: any)=> {
          this.article = article;
          this.userService.getUserById(article.userId).subscribe((data: any)=>{
            this.publisher = data.username;
          });
        });
      }
   }

  ngOnInit(): void {

  }

  // onTextChange(): void {
  //   let content = document.getElementById('content');
  //   if (content != null) {
  //     content.innerHTML = marked.parse(`${this.text}`);
  //   }
  // }


}
