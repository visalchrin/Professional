import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  AfterViewInit,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SearchService } from 'src/app/services/search.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { NavigatorComponent } from '../navigator/navigator.component';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  modalRef?: BsModalRef;
  con1: any = 6;
  con2: any = 5;
  list_search: any[] = [];
  notFound: string = 'Search not found';
  searchText: string = '';
  str: string = '+Follow';
  id: string = '';
  message: any = [];
  isTrue: boolean = false;




  constructor(
    private fb: FormBuilder,
    private router: Router,
    private searchService: SearchService,
    private shareService: ShareService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.message = this.shareService.getMessage1();
    this.list_search = this.getAllUser();
  }

  onClickHome(): void {
    this.router.navigate(['./home']);
  }

  getAllUser() {
    return this.searchService.getAllUsers();
  }

  onClickProfile() {
    this.router.navigate(['./profile']);
  }

  onClickName() {
    this.router.navigate(['./profile']);
  }
  onClickSeeMore() {
    this.con1 = 1000;
    this.con2 = !this.con2;
    
  }
  onSearchNotFound() {
    this.isTrue = true;
    if (this.shareService.getMessage1() === '') {
      this.message = this.shareService.getMessage1();
      return true;
    } else {
      this.message = this.shareService.getMessage1();
      return true;
    }
  }

  onClickFollow(list_search: any) {
    if (
      this.str === '+Follow' &&
      this.list_search.find((r: any) => r.id === list_search.id)
    ) {
      this.str = 'Unfollow';
    } else {
      this.str = '+Follow';
    }
  }
  isNull() {
    return this.isTrue;
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  decline():void {
    this.modalRef?.hide();
  }
}
