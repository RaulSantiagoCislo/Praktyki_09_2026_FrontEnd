import { Component } from '@angular/core';
import { Podroz } from '../podroz/podroz';
import { Rozrywka } from '../rozrywka/rozrywka';
import { Kultura } from '../kultura/kultura';

@Component({
  imports: [Podroz, Rozrywka, Kultura],
  selector: 'app-strona-g2',
  styleUrl: './strona-g2.css',
  templateUrl: './strona-g2.html',
})
export class StronaG2 {
  pokazany = 'podroz';

  pokazPodroz() {
    this.pokazany = 'podroz';
  }

  pokazRozrywke() {
    this.pokazany = 'rozrywka';
  }

  pokazKulture() {
    this.pokazany = 'kultura';
  }
}
