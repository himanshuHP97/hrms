import { Component, Input, OnInit, Output } from '@angular/core';
import { ICarouselImage } from 'src/app/model/carousel-image.model';

@Component({
  selector: 'app-login-carousel',
  templateUrl: './login-carousel.component.html',
  styleUrls: ['./login-carousel.component.scss'],
})
export class LoginCarouselComponent implements OnInit {
  @Input() images: ICarouselImage[] = [];
  @Input() indicator = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;

  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }
  autoSlideImages() {
    setInterval(() => {
      this.indicator;
    }, this.slideInterval);
  }

  selectedImage(index: number) {
    this.selectedIndex = index;
  }
}
