import { Component, signal } from '@angular/core';
import { Login } from '../login/login';

@Component({
  imports: [Login],
  selector: 'Later_Menu-root',
  styleUrls: ['../../../styles.css', '../../../View.css'],
  templateUrl: '../../../Later_Menu.html',
})
export class App {
  protected readonly title = signal('Demo');
}