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
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent {
  flag: boolean = false;
  gettext: any = '';
  modalRef?: BsModalRef;
  form: FormGroup;
  btn: string = '';
  showMobileMenu: boolean = false;
  hisText: any[] = [];

  //@Output() event = new EventEmitter<string>();

  constructor(
    private router: Router,
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

  ngOnInit() {

  }

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
    //this.route.navigate(['./home']);
    return (this.gettext = '');
  }
  getAllUser() {
    return this.searchService.getAllUsers();
  }

  onClickSearch() {
    this.flag = false;
    this.hisText = this.gettext;
    this.shareService.setMessage(this.gettext);
  }
  onClickFocus(): any {
    return (this.flag = true);
  }
  onClickBlur(): any {
    return (this.flag = false);
  }
  onClickProfile() {
    this.router.navigate(["./profile"]);
  }




  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  // }
  // decline():void {
  //   this.modalRef?.hide();
  // }
}
