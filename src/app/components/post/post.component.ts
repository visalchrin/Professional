import { CookieService } from 'ngx-cookie-service';
import { LikeService } from './../../services/like.service';
import { UserService } from './../../services/user.service';
import {Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  //user: any;
  @Input() posts: any;

  constructor(
    private cookieService: CookieService,
    private likeService: LikeService,
    private userService: UserService,
    private router: Router) {
    //this.userService.getUserDetailInfo().subscribe((result) => {
     // this.user = result;
   // });
   }

   ngOnChanges() {
    console.log(this.posts);
  }

  ngOnInit(): void {
  }

  onProfileClick(username: string): void {
    this.router.navigate([`profile/${username}`]);
  }

  onClickLike(id: string): void {
    const element = document.getElementById(`${id}`);
    if (element != null) {
      if (element.style.color === 'orange') {
        element.style.color = 'black';
        // unlike post and decrease like count by 1
        this.likeService.unlike({
          username: this.cookieService.get("username"),
          postId: id
        }).subscribe(result => {
          console.log(result)
        });
        const like_number = document.getElementById(`like${id}`);
        if (like_number != null) {
          let num = like_number.textContent;
          if (num != null) {
            like_number.innerHTML = `${parseInt(num) - 1}`;
          }
        }
        
      } else {

        // like post and increase like count by 1
        element.style.color = 'orange';
        this.likeService.like({
          username: this.cookieService.get("username"),
          postId: id
        }).subscribe(result => {
          console.log(result)
        });

        const like_number = document.getElementById(`like${id}`);
        if (like_number != null) {
          let num = like_number.textContent;
          if (num != null) {
            like_number.innerHTML = `${parseInt(num) + 1}`;
          }
        }
      }
    }
  }

  onClickComment(postId: string): void {
    console.log("Click comment");
    const element = document.getElementById(`comment${postId}`);
    if (element != null) {
      if (element.style.display === "none") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  }

}
