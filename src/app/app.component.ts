import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HaderComponent } from "./shared/hader/hader.component";
import { AboutComponent } from "./shared/about/about.component";
import { SadbarComponent } from "./page/sadbar/sadbar.component";
import { About1Component } from './page/about-1/about-1.component';
import { RivelComponent } from './page/rivel/rivel.component';
import { ChefComponent } from "./page/chef/chef.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HaderComponent, AboutComponent, SadbarComponent, About1Component, RivelComponent, ChefComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'food';
}
