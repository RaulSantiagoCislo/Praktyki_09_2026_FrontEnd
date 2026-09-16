import { Component } from '@angular/core';
import { Travel } from '../Travel/Travel';
import { Enterteinment } from '../enterteinment/enterteinment';
import { Culture } from '../culture/culture';

@Component({
  imports: [Travel, Enterteinment, Culture],
  selector: 'app-strona-g2',
  styleUrl: './strona-g2.css',
  templateUrl: './strona-g2.html',
})
export class StronaG2 {
  Showed = 'Travel';

  ShowTravel() {
    this.Showed = 'Travel';
  }

  ShowEnterteinment() {
    this.Showed = 'enterteinment';
  }

  ShowCulture() {
    this.Showed = 'culture';
  }
}
