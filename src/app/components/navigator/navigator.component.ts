import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit {
  form: FormGroup;
  btn: string = '';
  showMobileMenu: boolean = false;
  list_search: any[] = [];

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private searchService: SearchService
  ) {
    this.btn = 'hamburger';
    this.form = fb.group({
      search_title: new FormControl(null),
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
  onClickSearch(): void {
    this.list_search = this.form.value.search_title;
    console.log(this.list_search);
  }
}
