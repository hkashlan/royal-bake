import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Chef {
  img: string;
  name: string;
  info: string;
};

@Component({
  selector: 'app-chef',
  imports: [CommonModule],
  templateUrl: './chef.component.html',
  styleUrl: './chef.component.scss',
})
export class ChefComponent {
  image: Chef[] = [
    { img: '/chef-1.jpg', name: 'RICHARD NAUZ', info: 'food chef' },
    { img: '/chef-2.jpg', name: 'OLIVIA GROSH', info: 'food chef' },
    { img: '/chef-3.jpg', name: 'JEREMY WHITE', info: 'food chef' },
    { img: '/chef-4.jpg', name: 'HOWARD HOLMES', info: 'food chef' },
  ];
}
