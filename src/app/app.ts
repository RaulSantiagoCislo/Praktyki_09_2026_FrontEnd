import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Rejestr } from './rejestr';

@Component({
  imports: [Login, Rejestr],
  selector: 'app-root',
  styleUrls: ['./app.css', './Wygląd.css'],
  //styleUrl: './Wygląd.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Demo');
}