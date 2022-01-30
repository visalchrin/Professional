import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  users: any;
  loading: boolean = true;
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.userService.getAllUsers().subscribe((data)=> {
      this.users = data;
      this.loading = false;
    })
    
   }

  ngOnInit(): void {
  }

  onClickProfile(username: string) {
    this.router.navigate([`profile/${username}`]);
  }

  OnClickHome() {
    this.router.navigate(["/feed"]);
  }

}
