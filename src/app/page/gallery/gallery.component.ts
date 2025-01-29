import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  gallery:any=[
    {image:'/Gallery/gallery-1.jpg'},
    {image:'/Gallery/gallery-2.jpg'},
    {image:'/Gallery/gallery-3.jpg'},
    {image:'/Gallery/gallery-4.jpg'},
    {image:'/Gallery/gallery-5.jpg'},
    {image:'/Gallery/gallery-6.jpg'},
  ]
}
