import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Zjezyki } from './zjezyki/zjezyki';

@Component({
  imports: [Login, Zjezyki],
  selector: 'app-root',
  styleUrls: ['./app.css', './Wygląd.css'],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Demo');

  pokazJezykiOkno = false;

  pokazJezyki() {
    this.pokazJezykiOkno = !this.pokazJezykiOkno;
  }
}
