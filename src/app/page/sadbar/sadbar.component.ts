import { Component } from '@angular/core';

interface Slide {
  img: string;
  title: string;
  info: string;
  price: string;
}

@Component({
  selector: 'app-sadbar',
  imports: [],
  templateUrl: './sadbar.component.html',
  styleUrl: './sadbar.component.scss',
})
export class SadbarComponent {
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
}
