import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  modalRef?: BsModalRef;
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

}
