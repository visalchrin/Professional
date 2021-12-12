import {
  Component,
  OnInit,
  Input,
  Output,
  TemplateRef,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SearchService } from 'src/app/services/search.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent {
  gettext: string = '';
  click: boolean = false;
  modalRef?: BsModalRef;
  form: FormGroup;
  btn: string = '';
  showMobileMenu: boolean = false;

  //@Output() event = new EventEmitter<string>();

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private searchService: SearchService,
    private shareService: ShareService,
    private modalService: BsModalService
  ) {
    this.btn = 'hamburger';
    this.form = fb.group({
      searchtext: new FormControl(null),
    });
  }

  ngOnInit(): void {}

  onClickShowMenu() {
    this.showMobileMenu = !this.showMobileMenu;
    if (this.btn === 'close') {
      this.btn = 'hamburger';
    } else {
      this.btn = 'close';
    }
  }

  OnNavigate(): void {
    this.showMobileMenu = !this.showMobileMenu;
    if (this.btn === 'close') {
      this.btn = 'hamburger';
    } else {
      this.btn = 'close';
    }
  }
  onClickDelete() {
    this.route.navigate(["./home"]);
    return (this.gettext = '');
  }
  getAllUser() {
    return this.searchService.getAllUsers();
  }

  onClickSearch() {
    return this.shareService.setMessage(this.gettext);
  }

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  // }
  // decline():void {
  //   this.modalRef?.hide();
  // }
}
