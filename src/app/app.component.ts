import { Component } from '@angular/core';

import { About1Component } from './page/about-1/about-1.component';
import { ChefComponent } from './page/chef/chef.component';
import { ContentComponent } from './page/content/content.component';
import { FormComponent } from './page/form/form.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { MenuComponent } from './page/menu/menu.component';
import { RivelComponent } from './page/rivel/rivel.component';
import { SideBarComponent } from './page/side-bar/side-bar.component';
import { HeaderComponent } from './shared/header/header.component';
import { GpsComponent } from "./page/gps/gps.component";
import { FooterComponent } from "./page/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    SideBarComponent,
    About1Component,
    RivelComponent,
    ChefComponent,
    MenuComponent,
    GalleryComponent,
    FormComponent,
    ContentComponent,
    GpsComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'food';
}
