import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCarouselComponent } from './login-carousel/login-carousel.component';

@NgModule({
  declarations: [LoginCarouselComponent],
  imports: [CommonModule],
  exports: [LoginCarouselComponent],
})
export class SharedModule {}
