import { Component } from '@angular/core';

import { About1Component } from './page/about-1/about-1.component';
import { ChefComponent } from './page/chef/chef.component';
import { RivelComponent } from './page/rivel/rivel.component';
import { SadbarComponent } from './page/sadbar/sadbar.component';
import { HaderComponent } from './shared/hader/hader.component';
import { MenuComponent } from "./page/menu/menu.component";
import { GalleryComponent } from "./page/gallery/gallery.component";
import { FormComponent } from "./page/form/form.component";

@Component({
  selector: 'app-root',
  imports: [
    HaderComponent,
    SadbarComponent,
    About1Component,
    RivelComponent,
    ChefComponent,
    MenuComponent,
    GalleryComponent,
    FormComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'food';
}
