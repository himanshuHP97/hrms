import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthUserService } from './auth-user/auth-user.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
})
export class ModulesComponent implements OnInit, OnDestroy {
  isSidenavOpen = true;
  isAuthenticated = false;
  private userSub!: Subscription;

  constructor(private authService: AuthUserService) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  sidenavToggler() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
