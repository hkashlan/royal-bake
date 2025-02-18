import { Component, OnInit, ViewChild } from '@angular/core';

interface Slide {
  img: string;
  title: string;
  info: string;
  price: string;
}


import Swiper from 'swiper';


@Component({
  selector: 'app-side-bar',
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent implements OnInit{
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

  plusamg() {}


  ngOnInit() {
    this.swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    console.log(this.swiper);
  }
}
