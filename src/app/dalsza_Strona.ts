import { Component, signal } from '@angular/core';
import { Login } from './login/login';

@Component({
  imports: [Login],
  selector: 'dalsze_menu-root',
  styleUrls: ['./app.css', './Wygląd.css'],
  templateUrl: './dalsze_menu.html',
})
export class App {
  protected readonly title = signal('Demo');
}
