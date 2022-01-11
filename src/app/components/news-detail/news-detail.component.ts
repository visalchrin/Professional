import { marked } from 'marked';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  public quote: string = '***Make right desire and he will approach you in the highest way.***';
  public question: string = '*This is emphasized text!*';
  text: string = "";
  constructor() { }

  ngOnInit(): void {

    let content = document.getElementById('content');
    if (content != null) {
      content.innerHTML = marked.parse(`${this.text}`);
    }
  }



}
