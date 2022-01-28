import { UserService } from './../../services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { PostService } from './../../services/post.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  modalRef?: BsModalRef;
  formPost: FormGroup;
  posts: any;
  loading:boolean = true;
  user: any;
  
  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private postService: PostService,
    private userService: UserService,
    private cookieService: CookieService) {
    this.formPost = fb.group({
      content: new FormControl(null)
    })

    this.postService.getAllPostFromFollowing().subscribe((result: any) => {
      this.posts = result;
      this.loading = false;
    });

    this.userService.getUserDetailInfo(this.cookieService.get("username")).subscribe((data)=>{
      this.user = data;
    })
  }

  ngOnInit(): void {
  }

  OnClickNewPost(): void {
    console.log("Post click");
    console.log(this.formPost.value.content);

    this.postService.createPost({
      content: this.formPost.value.content,
      username: this.cookieService.get("username")
    }).subscribe((result: any) => {
      // add new post at the beginning of list of posts
      this.posts.unshift(result);
    });
    this.modalRef?.hide();

    this.formPost.reset();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
