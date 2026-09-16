import { Component } from '@angular/core';
import { Travel } from '../Travel/Travel';
// import { Enterteinment } from '../Enterteinment/Enterteinment';
import { Culture } from '../Culture/Culture';
import { Enterteinment } from '../../../src/app/Rest_of_Website USELESS/Enterteinment/Enterteinment';

@Component({
  imports: [Travel, Enterteinment, Culture],
  selector: 'app-strona-g2',
  styleUrl: './strona-g2.css',
  templateUrl: './strona-g2.html',
})
export class StronaG2 {
  pokazany = 'Travel';

  pokazPodroz() {
    this.pokazany = 'Travel';
  }

  pokazRozrywke() {
    this.pokazany = 'Enterteinment';
  }

  pokazKulture() {
    this.pokazany = 'Culture';
  }
}
