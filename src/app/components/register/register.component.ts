import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { 
    this.formRegister = fb.group({
      fullname: new FormControl(null),
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

  onLogin() {
    
  }

}
