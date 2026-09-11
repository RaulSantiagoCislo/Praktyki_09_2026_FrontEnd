import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Zjezyki } from './zjezyki/zjezyki';
import { Ustawienia } from './ustawienia/ustawienia';
import { StronaG2 } from './StronaG2/StronaG2';

@Component({
  imports: [Login, Zjezyki, Ustawienia, StronaG2],
  selector: 'app-root',
  styleUrls: ['./app.css', './Wygląd.css'],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Demo');

  // tekst powitania na stronie
  Pokaz_TekstStronyGlownej = true;

  // Strona G2
  pokazStronaG2 = false;

  pokazG2() {
    this.pokazStronaG2 = true;
  }

  // tutaj mi zamienia okna ustawień i jezyka by sie zamieniały
  pokazJezykiOkno = false;

  pokazJezyki() {
    if (this.pokazUstawieniaOkno) {
      this.pokazUstawieniaOkno = false;
    }

    this.pokazJezykiOkno = !this.pokazJezykiOkno;
  }

  pokazUstawieniaOkno = false;

  pokazUstawienia() {
    if (this.pokazJezykiOkno) {
      this.pokazJezykiOkno = false;
    }

    this.pokazUstawieniaOkno = !this.pokazUstawieniaOkno;
  }

  wybranyJezyk = 'Polski';

  // PolskiJe = '';
  // AngielskiJe = '';
  // NiemieckiJe = '';
  // FrancuskiJe =

  zmienJezyk(jezyk: string) {
    this.wybranyJezyk = jezyk;

    //   if (jezyk === 'Polski') {
    //     this.PolskiJe = 'Polski';
    //     this.AngielskiJe = 'Polish';
    //     this.NiemieckiJe = '';
    //   }
    //
    //   if (jezyk === 'Angielski') {
    //     this. = '';
    //     this. = '';
    //     this. = '';
    //   }
    //
    //
    //
    //   if (jezyk === 'Niemiecki') {
    //     this. = '';
    //     this. = '';
    //     this. = '';
    //   }
    //
    //   if (jezyk === 'Francuski') {
    //     this. = '';
    //     this. = '';
    //     this. = '';
    //   }
  }
}
