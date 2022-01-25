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
  
  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private postService: PostService,
    private cookieService: CookieService) {
    this.formPost = fb.group({
      content: new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

  OnClickNewPost(): void {
    console.log("Post clicke");
    console.log(this.formPost.value.content);

    this.postService.createPost({
      content: this.formPost.value.content,
      username: this.cookieService.get("username")
    }).subscribe((result: any) => {
      console.log(result);
    });
    this.modalRef?.hide();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  

}
