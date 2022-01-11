import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news-career',
  templateUrl: './news-career.component.html',
  styleUrls: ['./news-career.component.scss']
})
export class NewsCareerComponent {
 
  constructor(private router: Router) {

  }

  clickDetail() {
    this.router.navigate(["newsDetail"])
  }
}