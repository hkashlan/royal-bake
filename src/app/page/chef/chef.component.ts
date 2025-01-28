import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chef',
  imports: [CommonModule],
  templateUrl: './chef.component.html',
  styleUrl: './chef.component.css'
})
export class ChefComponent {
  image:any=[{img:'/chef-1.jpg',name:'RICHARD NAUZ',info:'food chef'}
    ,{img:'/chef-2.jpg',name:'OLIVIA GROSH',info:'food chef'},
    {img:'/chef-3.jpg',name:'JEREMY WHITE',info:'food chef'},
    {img:'/chef-4.jpg',name:'HOWARD HOLMES',info:'food chef'},]
}
