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

  PolskiJe = 'Polski';
  AngielskiJe = 'Angielski';
  NiemieckiJe = 'Niemiecki';
  FrancuskiJe = 'Francuski';

  SelectLanguage(jezyk: string) {
    this.wybranyJezyk = jezyk;
    this.zmianaJezyka.emit(jezyk);

    if (jezyk === 'Polski') {
      this.PolskiJe = 'Polski';
      this.AngielskiJe = 'Angielski';
      this.NiemieckiJe = 'Niemiecki';
      this.FrancuskiJe = 'Francuski';
    }

    if (jezyk === 'Angielski') {
      this.PolskiJe = 'Polish';
      this.AngielskiJe = 'English';
      this.NiemieckiJe = 'German';
      this.FrancuskiJe = 'French';
    }

    if (jezyk === 'Niemiecki') {
      this.PolskiJe = 'Polnisch';
      this.AngielskiJe = 'Englisch';
      this.NiemieckiJe = 'Deutsch';
      this.FrancuskiJe = 'Französisch';
    }

    if (jezyk === 'Francuski') {
      this.PolskiJe = 'Polonais';
      this.AngielskiJe = 'Anglais';
      this.NiemieckiJe = 'Allemand';
      this.FrancuskiJe = 'Français';
    }
  }
}
