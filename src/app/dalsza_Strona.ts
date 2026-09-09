import { Component, signal } from '@angular/core';
import { Login } from './login/login';

@Component({
  imports: [Login],
  selector: 'dalsze_menu-root',
  styleUrls: ['./app.css', './Wygląd.css'],
  //styleUrl: './Wygląd.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Demo');
}
