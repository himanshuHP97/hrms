import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthUserService } from 'src/app/modules/auth-user/auth-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthUserService) {}

  ngOnInit(): void {}

  viewSidebar() {
    this.toggleSidenav.emit();
  }
  onLogout() {
    this.authService.logout();
  }
}
