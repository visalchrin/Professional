import { PostService } from './../../services/post.service';
import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Models/userModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any = null;
  loading:boolean = true;
  posts: any;

  constructor(
    private userService: UserService,
    private postService: PostService
  ) { 
    if (this.user == null) {
      this.loading = true;
    }

    this.postService.getAllPostByOwnerId().subscribe((data) => {
      this.posts = data;
    });
    
  }

  ngOnInit(): void {
    this.userService.getUserDetailInfo().subscribe((result => {
      console.log(result);
      this.user = result;
      this.loading = false;
      console.log("After user: ");
      console.log(this.user);
    }));
  }

}
