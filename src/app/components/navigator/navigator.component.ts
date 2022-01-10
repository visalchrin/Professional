import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  btn: string = '';
  keyword: string = '';
  showMobileMenu: boolean = false;

  constructor(private router: Router) { 
    this.btn = 'hamburger';
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    // When user search something
    console.log(this.keyword);
    this.router.navigate(["feed"]);
    this.keyword = "";
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
