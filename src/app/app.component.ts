import { Component, OnInit } from '@angular/core';
import { AuthUserService } from './modules/auth-user/auth-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthUserService,
  ) {}

  ngOnInit() {
    this.authService.autoLogin();
  }
}
