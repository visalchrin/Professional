import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  btn: string = '';
  showMobileMenu: boolean = false;

  constructor() { 
    this.btn = 'hamburger';
  }

  ngOnInit(): void {
    
  }

  onClickShowMenu() {
    this.showMobileMenu = !this.showMobileMenu;
    if (this.btn === 'close'){
      this.btn = 'hamburger';
    } else {
      this.btn = 'close';
    }
  }

  OnNavigate(): void {
    this.showMobileMenu = !this.showMobileMenu;
    if (this.btn === 'close'){
      this.btn = 'hamburger';
    } else {
      this.btn = 'close';
    }
  }

}
