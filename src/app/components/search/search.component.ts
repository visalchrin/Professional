import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  users: any;
  query: any;
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    if (this.route.snapshot.paramMap.get("query") != null) {
      this.query = this.route.snapshot.paramMap.get("query");
      this.searchService.search({query: this.query}).subscribe((data: any) => {
        this.users = data;
      })
    }
   }

  ngOnInit(): void {
  }

  onClickProfile(username: string) {
    this.router.navigate([`profile/${username}`]);
  }

}
