import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthUserService } from './auth-user.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.scss'],
})
export class AuthUserComponent implements OnDestroy {
  authForm!: NgForm;
  isLoginMode = true;
  error: any = null;
  private closeSub!: Subscription;

  imageslist = [
    { imageSrc: './assets/images/login-image.jpg', imageAlt: 'login' },
  ];

  constructor(private authService: AuthUserService, private router: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(data: any) {
    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authService.login(data);
    } else {
      authObs = this.authService.signUp(data);
    }

    authObs.subscribe({
      next: (resData) => {
        console.log(resData);
        this.router.navigate(['hrms/home']);
      },
      error: console.log,
    });
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
