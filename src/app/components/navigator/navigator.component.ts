import { LoginService } from './../../services/login.service';
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
  isAuthenticated: boolean = false;

  constructor(private router: Router, private loginService: LoginService) { 
    this.btn = 'hamburger';
    
  }

  ngOnInit(): void {
    this.isAuthenticated = this.loginService.isAuthenticated();
  }

  onSubmit() {
    // When user search something
    console.log(this.keyword);
    this.router.navigate(["search"]);
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

  onClickLogout(): void {
    this.loginService.logout();
    this.router.navigate(['/home']);
  }

}
