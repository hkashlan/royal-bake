import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HaderComponent } from "./shared/hader/hader.component";
import { AboutComponent } from "./shared/about/about.component";
import { SadbarComponent } from "./page/sadbar/sadbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HaderComponent, AboutComponent, SadbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'food';
}
