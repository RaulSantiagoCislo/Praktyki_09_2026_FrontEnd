import { Component, signal } from '@angular/core';
import { LoginComponent } from './Components/login/login.component';

@Component({
  imports: [LoginComponent],
  selector: 'Later_Menu-root',
  styleUrls: ['./app.css', './View.css'],
  templateUrl: './Later_Menu.html',
})
export class App {
  protected readonly title = signal('Demo');
}