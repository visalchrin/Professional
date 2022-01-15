import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/Models/userModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) { 
    this.formRegister = fb.group({
      fullname: new FormControl(null),
      email: new FormControl(null),
      skill: new FormControl(null),
      experience: new FormControl(null),
      description: new FormControl(null),
      username: new FormControl(null),
      password: new FormControl(null),

    })
  }

  ngOnInit(): void {
  }

  onRegister(): void {
    let user = new User(
      this.formRegister.value.fullname,
      this.formRegister.value.email,
      this.formRegister.value.skill,
      this.formRegister.value.experience,
      this.formRegister.value.description,
      this.formRegister.value.username,
      this.formRegister.value.password
    );
   this.loginService.register(user);
  }
}
