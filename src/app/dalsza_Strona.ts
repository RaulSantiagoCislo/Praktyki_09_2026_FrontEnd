import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'dalsze_menu-root',
  styleUrls: ['./app.css', './Wygląd.css'],
  templateUrl: './dalsze_menu.html',
})
export class DalszaStrona {
  protected readonly title = signal('Demo');
}