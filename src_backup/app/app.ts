import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Ch1Language } from './Ch1Language/Ch1Language';
import { Settings } from './Settings/Settings';
import { StronaG2 } from './strona-g2/strona-g2';

@Component({
  imports: [Login, Ch1Language, Settings, StronaG2],
  selector: 'app-root',
  styleUrls: ['./app.css', './View.css'],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Demo');

  // tekst powitania na stronie
  Show_TextMainSite = true;
  ShowG2() {
    this.ShowSiteG2 = true;
    this.Show_TextMainSite = false;
  }

  // Strona G2
  ShowSiteG2 = false;

  // pokazG2() {
  //   this.pokazStronaG2 = true;
  // }

  // tutaj mi zamienia okna ustawień i jezyka by sie zamieniały
  ShowLanguage_Window = false;

  ShowLanguage() {
    if (this.ShowSettings_Window) {
      this.ShowSettings_Window = false;
    }

    this.ShowLanguage_Window = !this.ShowLanguage_Window;
  }

  ShowSettings_Window = false;

  ShowSettings() {
    if (this.ShowLanguage_Window) {
      this.ShowLanguage_Window = false;
    }

    this.ShowSettings_Window = !this.ShowSettings_Window;
  }

  ChosenLanguage = 'Polski';

  // PolskiJe = '';
  // AngielskiJe = '';
  // NiemieckiJe = '';
  // FrancuskiJe =

  ChangeLanguage(jezyk: string) {
    this.ChosenLanguage = jezyk;

    //   if (jezyk === 'Polski') {
    //     this.PolskiJe = 'Polski';
    //     this.AngielskiJe = 'Polish';
    //     this.NiemieckiJe = '';
    //   }
    //
    //   if (jezyk === 'Angielski') {
    //     this. = '';
    //     this. = '';
    //     this. = '';
    //   }
    //
    //
    //
    //   if (jezyk === 'Niemiecki') {
    //     this. = '';
    //     this. = '';
    //     this. = '';
    //   }
    //
    //   if (jezyk === 'Francuski') {
    //     this. = '';
    //     this. = '';
    //     this. = '';
    //   }
  }
}
