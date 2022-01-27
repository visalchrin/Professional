import { CookieService } from 'ngx-cookie-service';
import { FollowService } from './../../services/follow.service';
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
  isFollowed: any = null;
  isLoginUser: boolean = false;
  numFollower: any; 

  constructor(
    private userService: UserService,
    private postService: PostService,
    private route: ActivatedRoute,
    private followService: FollowService,
    private cookieService: CookieService
  ) { 
    if (this.user == null) {
      this.loading = true;
    }

    if (this.route.snapshot.paramMap.get("username") != null) {
      this.username = this.route.snapshot.paramMap.get("username");

      // get number of follower
      this.followService.countFollower({username:this.username}).subscribe((result) => {
        this.numFollower = result;
        console.log(result);
      })

      // check whether it is a login user profile
      if(this.cookieService.get('username') === this.username) this.isLoginUser = true;
      else this.isLoginUser = false;

      this.postService.getAllPostByOwnerId(this.username).subscribe((data) => {
        this.posts = data;
        this.loading = false;
      });
    }

    this.followService.isFollowed({
      'username': this.username,
      'follow': this.cookieService.get("username")
    }).subscribe((result: any) => {
      this.isFollowed = result;
      console.log("this is calling is followed");
      console.log(result);
    });

    console.log(this.isFollowed);
    
  }

  ngOnInit(): void {
    
    //= this.route.snapshot.paramMap.get("username");
    if (this.route.snapshot.paramMap.get("username") != null) {
      this.username = this.route.snapshot.paramMap.get("username");


      this.followService.isFollowed({
        'username': this.username,
        'follow': this.cookieService.get("username")
      }).subscribe((result: any) => {
        this.isFollowed = result;
      });

      this.userService.getUserDetailInfo(this.username).subscribe((result => {
        console.log(result);
        this.user = result;
        console.log("After user: ");
        console.log(this.user);
      }));
    }
    
  }

  onClickFollow() {
    this.isFollowed = true;
    this.numFollower += 1;

    //console.log("click follow");
    if (this.route.snapshot.paramMap.get("username") != null) {
      this.username = this.route.snapshot.paramMap.get("username");

      this.followService.follow({
          'username': this.cookieService.get("username"),
          'follow': this.username
        }
      ).subscribe((result => {
        console.log(result);
      }));
    }

  }

  onClickUnfollow() {
    this.isFollowed = false;
    this.numFollower -= 1;

    if (this.route.snapshot.paramMap.get("username") != null) {
      this.username = this.route.snapshot.paramMap.get("username");

      this.followService.unFollow({
          'username': this.cookieService.get("username"),
          'follow': this.username
        }
      ).subscribe((result => {
        console.log(result);
      }));
    }
  }

}
