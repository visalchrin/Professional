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
    private fb: FormBuilder
  ) { 
    this.formLogin = fb.group({
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

  onLogin() {
    
  }

}
