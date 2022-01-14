import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private route: Router
  ) { 
    this.formLogin = fb.group({
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }

  ngOnInit(): void {
    if(this.loginService.isAuthenticated()) {
      this.route.navigate(["/feed"]);
    }
  }

  onLogin() {
    // window.location.reload();
    this.loginService.login(
      {
        username: this.formLogin.value.username,
        password: this.formLogin.value.password
      }
    );
  }

}
