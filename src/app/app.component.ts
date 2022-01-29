import { LoginService } from './services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Professional';

  constructor(private loginService: LoginService) {

    // get new token in every 9 minutes
    var refresh = setInterval(() => { 
      this.loginService.refreshToken();
    }, 9 * 10 * 1000);
  }
}
