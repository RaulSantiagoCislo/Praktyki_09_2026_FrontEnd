import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-Ch1Language',
  styleUrl: './Ch1Language.component.css',
  templateUrl: './Ch1Language.component.html',
})
export class Ch1Language {
  @Output() ChangingLanguage = new EventEmitter<string>();

  ChosenLanguage = 'Polski';

  PolishLa = 'Polski';
  EnglishLa = 'Angielski';
  GermanLa = 'Niemiecki';
  FrenchLa = 'Francuski';

  SelectLanguage(Language: string) {
    this.ChosenLanguage = Language;
    this.ChangingLanguage.emit(Language);

    if (Language === 'Polski') {
      this.PolishLa = 'Polski';
      this.EnglishLa = 'Angielski';
      this.GermanLa = 'Niemiecki';
      this.FrenchLa = 'Francuski';
    }

    if (Language === 'Angielski') {
      this.PolishLa = 'Polish';
      this.EnglishLa = 'English';
      this.GermanLa = 'German';
      this.FrenchLa = 'French';
    }

    if (Language === 'Niemiecki') {
      this.PolishLa = 'Polnisch';
      this.EnglishLa = 'Englisch';
      this.GermanLa = 'Deutsch';
      this.FrenchLa = 'Französisch';
    }

    if (Language === 'Francuski') {
      this.PolishLa = 'Polonais';
      this.EnglishLa = 'Anglais';
      this.GermanLa = 'Allemand';
      this.FrenchLa = 'Français';
    }
  }
}
