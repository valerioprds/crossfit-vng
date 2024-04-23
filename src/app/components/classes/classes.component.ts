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
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
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
