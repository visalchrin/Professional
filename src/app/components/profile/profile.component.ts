import { PostService } from './../../services/post.service';
import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Models/userModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any = null;
  loading:boolean = true;
  posts: any;
  username: any = "";

  constructor(
    private userService: UserService,
    private postService: PostService,
    private route: ActivatedRoute
  ) { 
    if (this.user == null) {
      this.loading = true;
    }

    this.postService.getAllPostByOwnerId().subscribe((data) => {
      this.posts = data;
    });
    
  }

  ngOnInit(): void {
    
    //= this.route.snapshot.paramMap.get("username");
    if (this.route.snapshot.paramMap.get("username") != null) {
      this.username = this.route.snapshot.paramMap.get("username");

      this.userService.getUserDetailInfo(this.username).subscribe((result => {
        console.log(result);
        this.user = result;
        this.loading = false;
        console.log("After user: ");
        console.log(this.user);
      }));
    }
    
  }

}
