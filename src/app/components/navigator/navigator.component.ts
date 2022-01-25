import { CookieService } from 'ngx-cookie-service';
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

  constructor(
    private router: Router, 
    private loginService: LoginService,
    private cookieService: CookieService) { 
    this.btn = 'hamburger';
    this.isAuthenticated = loginService.isAuthenticated();

    if (this.loginService.isAuthenticated()) {
      setInterval(()=> {
        this.loginService.refreshToken();
        console.log("refresh token is called");
      }, 9*60*1000);
    }
    
  }


  ngOnInit(): void {
  }

  onClickProfile() {
    this.router.navigate([`profile/${this.cookieService.get('username')}`]);
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
    this.isAuthenticated = !this.isAuthenticated;
  }

}
