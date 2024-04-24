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
import { RouterModule } from '@angular/router';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [SwiperModule, CommonModule, RouterModule],
  templateUrl: './classes-slider.component.html',
  styleUrl: './classes-slider.component.scss',
})
export class ClassesSliderComponent {
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
      image: '/assets/images/fotos-clases/CrossFitVNG25.webp',
      title: 'Crossfit',
    },
    {
      image: '/assets/images/fotos-clases/CrossFitVNG76.webp',
      title: 'Strength and conditioning',
    },
    {
      image: '/assets/images/fotos-clases/CrossFitVNG73.webp',
      title: 'Halterofilia',
    },
    {
      image: '/assets/images/fotos-clases/rings.webp',
      title: 'Gymnastics',
    },
    {
      image: '/assets/images/fotos-clases/CrossFitVNG89.webp',
      title: 'Endurance',
    },
    {
      image: '/assets/images/fotos-clases/basic2.webp',
      title: 'Basics',
    },
    {
      image: '/assets/images/fotos-clases/CrossFitVNG231.webp',
      title: 'Mobility',
    },
    {
      image: '/assets/images/fotos-clases/pilates.jpeg',
      title: 'Pilates - OTRA FOTO',
    },
    {
      image: '/assets/images/fotos-clases/pilates.jpeg',
      title: 'Kids - OTRA FOTO',
    },

    {
      image: '/assets/images/fotos-clases/pilates.jpeg',
      title: 'Synergy WOD',
    },
  ];
}
