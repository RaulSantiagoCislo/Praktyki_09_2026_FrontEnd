import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-Ch1Language',
  styleUrl: './Ch1Language.css',
  templateUrl: './Ch1Language.html',
})
export class Ch1Language {
  @Output() ChangingLanguage = new EventEmitter<string>();

  ChosenLanguage = 'Polski';

  PolskiJe = 'Polski';
  AngielskiJe = 'Angielski';
  NiemieckiJe = 'Niemiecki';
  FrancuskiJe = 'Francuski';

  SelectLanguage(jezyk: string) {
    this.ChosenLanguage = jezyk;
    this.ChangingLanguage.emit(jezyk);

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
