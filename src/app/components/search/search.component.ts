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
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  num: any;
  list_search: any[] = [];
  notFound: string = 'Search not found';
  searchText: string = '';
  str: string = 'Follow';
  id: string = '';
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private searchService: SearchService,
    private shareService: ShareService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.message = this.shareService.getMessage();
    this.list_search = this.getAllUser();
  }

  onClickHome(): void {
    this.router.navigate(['./home']);
  }

  getAllUser() {
    return this.searchService.getAllUsers();
  }

  onClickProfile() {
    this.router.navigate(['./home']);
    console.log(this.message);
  }

  onClickName() {
    this.router.navigate(['./home']);
  }

  onClickFollow(list_search: any) {
    const value = this.getAllUser().find(
      (result) => result.id === list_search.id
    );
    if (this.str === 'Follow' && value) {
      return (this.str = 'Unfollow');
    } else {
      return (this.str = 'Follow');
    }
  }
  isNull(): any {
    if(this.message === this.shareService.getMessage()) {
      return this.message = this.shareService.getMessage();
    }
    else {
      return this.message = this.shareService.getMessage();
    }
  }

  // receieveMessage($event: string){
  //   this.child = $event;
  // }
}
