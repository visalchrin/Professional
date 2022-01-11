import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  public quote: string = '***Make right desire and he will approach you in the highest way.***';
  public question: string = 'Have you seen **WandaVision** yet.';
  constructor() { }

  ngOnInit(): void {
  }

}
