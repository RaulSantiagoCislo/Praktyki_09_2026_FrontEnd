import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-zjezyki',
  styleUrl: './zjezyki.css',
  templateUrl: './zjezyki.html',
})
export class Zjezyki {
  @Output() zmianaJezyka = new EventEmitter<string>();

  wybranyJezyk = 'Polski';

  wybierzJezyk(jezyk: string) {
    this.wybranyJezyk = jezyk;
    this.zmianaJezyka.emit(jezyk);
  }
}


