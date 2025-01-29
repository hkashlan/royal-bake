import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  food:any=[
    {image:'/menu/product-1.jpg',name:'SEAFOOD',description:'Lorem ipsum dolor sit, amet consectetur adipisicing, elit.',price:'$23.99'},
    {image:'/menu/product-2.jpg',name:'SEAFOOD',description:'Lorem ipsum dolor sit, amet consectetur adipisicing, elit.',price:'$23.99'},
    {image:'/menu/product-3.png',name:'SEAFOOD',description:'Lorem ipsum dolor sit, amet consectetur adipisicing, elit.',price:'$23.99'},
    {image:'/menu/product-5.jpg',name:'SEAFOOD',description:'Lorem ipsum dolor sit, amet consectetur adipisicing, elit.',price:'$23.99'},
    {image:'/menu/product-6.jpg',name:'SEAFOOD',description:'Lorem ipsum dolor sit, amet consectetur adipisicing, elit.',price:'$23.99'},
    {image:'/menu/product-7.jpg',name:'SEAFOOD',description:'Lorem ipsum dolor sit, amet consectetur adipisicing, elit.',price:'$23.99'},
    {image:'/menu/product-8.jpg',name:'SEAFOOD',description:'Lorem ipsum dolor sit, amet consectetur adipisicing, elit.',price:'$23.99'},
    {image:'/menu/product-2.jpg',name:'SEAFOOD',description:'Lorem ipsum dolor sit, amet consectetur adipisicing, elit.',price:'$23.99'},
  ]
}
