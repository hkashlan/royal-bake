import { Component } from '@angular/core';

import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-header',
  imports: [AboutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
