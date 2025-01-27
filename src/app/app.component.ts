import { Component } from '@angular/core';

import { SadbarComponent } from './page/sadbar/sadbar.component';
import { HaderComponent } from './shared/hader/hader.component';

@Component({
  selector: 'app-root',
  imports: [HaderComponent, SadbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'food';
}
