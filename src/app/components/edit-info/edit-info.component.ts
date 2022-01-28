import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/Models/userModel';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss']
})
export class EditInfoComponent implements OnInit {

  formEditInfo: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router
  ) { 

    this.userService.getUserDetailInfo(this.cookieService.get("username")).subscribe((data: any) => {
      this.formEditInfo.patchValue({
        fullname: data.fullname,
        email: data.email,
        skill: data.skill,
        experience: data.experience,
        description: data.description,
        profile: data.profile,
      })
    });

    this.formEditInfo = fb.group({
      fullname: new FormControl(null),
      email: new FormControl(null),
      skill: new FormControl(null),
      experience: new FormControl(null),
      description: new FormControl(null),
      profile: new FormControl(null),
    })
  }

  ngOnInit(): void {
    this.userService.getUserDetailInfo(this.cookieService.get("username")).subscribe((data: any) => {
      this.formEditInfo.patchValue({
        fullname: data.fullname,
        email: data.email,
        skill: data.skill,
        experience: data.experience,
        description: data.description,
        profile: data.profile,
      })
    });
  }

  onEdit(): void {
    
   this.userService.editUserInfo({
    username: this.cookieService.get("username"),
    fullname: this.formEditInfo.value.fullname,
    email: this.formEditInfo.value.email,
    skill: this.formEditInfo.value.skill,
    experience: this.formEditInfo.value.experience,
    description: this.formEditInfo.value.description,
    profile: this.formEditInfo.value.profile,
   }).subscribe((data) => {
     console.log(data);
   });
   
   this.router.navigate([`profile/${this.cookieService.get('username')}`]);
  }

}
