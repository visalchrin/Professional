import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  modalRef?: BsModalRef;
  likeBtnColor : String = "currentColor";
  // constructor() { }
  constructor(private modalService: BsModalService) {
    
  }

  ngOnInit(): void {
  }

  OnClickNewPost(): void {
    console.log("Post clicke");
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onClickLike(): void {
    console.log(this.likeBtnColor);
    if (this.likeBtnColor === "orange") {
      this.likeBtnColor = "currentColor";
    } else {
      this.likeBtnColor = "orange";
    }
  }

}
