import { afterNextRender, Component, ViewChild } from '@angular/core';

interface Slide {
  img: string;
  title: string;
  info: string;
  price: string;
}


import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
Swiper.use([Autoplay, Navigation]);


@Component({
  selector: 'app-side-bar',
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  @ViewChild('swiperContainer', { static: true }) swiperRef!: Swiper;

  swiper!: Swiper


  slides: Slide[] = [
    {
      img: '/special.jpg',
      title: 'PASTA',
      info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est.',
      price: '$11.30',
    },
    {
      img: '/special.jpg',
      title: 'PASTA',
      info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est.',
      price: '$12.30',
    },
    {
      img: '/special.jpg',
      title: 'PASTA',
      info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est.',
      price: '$13.30',
    },
    {
      img: '/special.jpg',
      title: 'PASTA',
      info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est.',
      price: '$11.30',
    },
    {
      img: '/special.jpg',
      title: 'PASTA',
      info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est.',
      price: '$11.30',
    },
    {
      img: '/special.jpg',
      title: 'PASTA',
      info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est.',
      price: '$11.30',
    },
    {
      img: '/special.jpg',
      title: 'PASTA',
      info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est.',
      price: '$11.30',
    },
    {
      img: '/special.jpg',
      title: 'PASTA',
      info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est.',
      price: '$11.30',
    },
    {
      img: '/special.jpg',
      title: 'PASTA',
      info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est.',
      price: '$11.30',
    },
  ];

  constructor() {
    afterNextRender(() => {
      this.swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 2000, // Delay between transitions (in ms)
          disableOnInteraction: false, // Continue autoplay after user interaction
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },

      });
      // setTimeout(() => {

      //   this.swiper.autoplay.start();
      // }, 100);
    });
  }

  plusamg() {}



}
