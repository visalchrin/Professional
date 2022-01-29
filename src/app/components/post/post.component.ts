import { CommentService } from './../../services/comment.service';
import { CookieService } from 'ngx-cookie-service';
import { LikeService } from './../../services/like.service';
import { UserService } from './../../services/user.service';
import {Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  //user: any;
  @Input() posts: any;
  comments: any;
  formComment: FormGroup;
  user: any;

  constructor(
    private fb: FormBuilder,
    private cookieService: CookieService,
    private likeService: LikeService,
    private userService: UserService,
    private commentService: CommentService,
    private router: Router) {
      this.formComment = fb.group({
        comment: new FormControl(null)
      });

      this.userService.getUserDetailInfo(this.cookieService.get("username")).subscribe((data)=> {
        this.user = data;
      })
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
    //console.log("Click comment");
    //console.log(postId);
    const element = document.getElementById(`comment${postId}`);
    console.log(element);
    if (element != null) {
      if (element.style.display === "none") {
        element.style.display = "block";
        this.commentService.getCommentsByPostId(postId).subscribe((data: any) => {
          this.comments = data;
          console.log(data);
        })
      } else {
        element.style.display = "none";
      }
    }
  }

  onClickPostComment(postId: string) {
    this.commentService.createComment({
      username: this.cookieService.get("username"),
      postId: postId,
      comment: this.formComment.value.comment
    }).subscribe((data)=> {
      this.comments.unshift(data);
    });

    const comment_number = document.getElementById(`c${postId}`);
        if (comment_number != null) {
          let num = comment_number.textContent;
          if (num != null) {
            comment_number.innerHTML = `${parseInt(num) + 1}`;
          }
    }

    this.formComment.reset();
  }

}
