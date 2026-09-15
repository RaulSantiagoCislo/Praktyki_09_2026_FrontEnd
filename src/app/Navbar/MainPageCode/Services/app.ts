import { Component, signal } from '@angular/core';
import { Login } from '../../login/login';
import { Ch1Language } from '../../Ch1Language/Ch1Language';
import { Settings } from '../../Settings/Settings';

@Component({
  imports: [Login, Ch1Language, Settings],
  selector: 'app-root',
  styleUrls: ['../../../styles.css', '../../../View.css'],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Demo');

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

  ChangeLanguage(jezyk: string) {
    this.ChosenLanguage = jezyk;
  }
}