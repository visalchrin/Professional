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
  con1: any = 6;
  con2: any = 5;
  list_search: any = [];
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
    console.log(this.message);
  }

  onClickName() {
    this.router.navigate(['./profile']);
  }
  onClickFollow() {
    const value = this.list_search.find(
      (r: any) => r.id === this.list_search.id
    );
    if (this.str === '+Follow' && value) {
      this.str = 'Unfollow';
    } else {
      this.str = '+Follow';
    }
  }
  onClickSeeMore() {
    this.con1 >= this.con1;
    this.con2 = !this.con2;
  }
  onSearchNotFound() {
    if (this.shareService.getMessage1() === '') {
      this.message = this.shareService.getMessage1();
      return true;
    } else {
      this.message = this.shareService.getMessage1();
      return true;
    }
  }

  // receieveMessage($event: string){
  //   this.child = $event;
  // }
}
