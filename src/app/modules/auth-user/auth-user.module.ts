import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AuthUserComponent } from './auth-user.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AuthUserComponent],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: AuthUserComponent }]),
  ],
})
export class AuthUserModule {}
