import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
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
    private userService: UserService,
    private router: Router) {
    //this.userService.getUserDetailInfo().subscribe((result) => {
     // this.user = result;
   // });
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
      } else {
        element.style.color = 'orange';
      }
    }
    
    console.log(element);
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
