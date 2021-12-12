import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 15000, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {

  constructor(private searchService: SearchService) { }


  ngOnInit(): void {
  }

}
