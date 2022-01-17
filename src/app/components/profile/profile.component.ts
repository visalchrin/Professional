import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/userModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any = null;
  loading:boolean = true;

  constructor(
    private userService: UserService
  ) { 
    // this.userService.getUserDetailInfo.subscribe((result: any) => {
    //   result.forEach((d: any) => {
    //     this.categories.push({ id: d.id, name: d.name });
    //   });
    // });
    if (this.user == null) {
      this.loading = true;
    }
    
  }

  ngOnInit(): void {
    this.userService.getUserDetailInfo().subscribe((result => {
      console.log(result);
      this.user = result;
      this.loading = false;
      console.log("After user: ");
      console.log(this.user);
    }));
  }

}
