import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Zjezyki } from './zjezyki/zjezyki';
import { Ustawienia } from './ustawienia/ustawienia';

@Component({
  imports: [Login, Zjezyki, Ustawienia],
  selector: 'app-root',
  styleUrls: ['./app.css', './Wygląd.css'],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Demo');

  // Okno wyboru języka
  pokazJezykiOkno = false;

  pokazJezyki() {
    this.pokazJezykiOkno = !this.pokazJezykiOkno;
  }


  pokazUstawieniaOkno = false;

  pokazUstawienia() {
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
