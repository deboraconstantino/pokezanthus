import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'poke-zanthus';

  images = [700, 533, 807, 124].map((n) => `./../assets/images/19183755227514.jpg`);
}
