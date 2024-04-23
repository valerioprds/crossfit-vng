import { Component } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  SwiperOptions,
  Swiper,
} from 'swiper';
import { CommonModule } from '@angular/common';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [SwiperModule, CommonModule],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss',
})
export class ClassesComponent {
  config: SwiperOptions = {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    breakpoints: {
      // when window width is >= 300px
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

  slides = [
    {
      image: '/assets/images/CF-VNG LOGO versiones-01.jpg',
    },
    {
      image: '/assets/images/felipe.jpg',
    },
    {
      image: '/assets/images/WOD2.jpg',
    },
  ];
}
