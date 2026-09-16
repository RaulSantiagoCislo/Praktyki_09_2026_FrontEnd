import { Component, signal } from '@angular/core';
import { LoginComponent } from './Components/login/login.component';
import { Ch1Language } from './Components/Ch1Language/Ch1Language';
import { Settings } from './Components/Settings/Settings';
import { RegisterComponent } from './Components/register/register.component';

@Component({
  imports: [LoginComponent, Ch1Language, Settings, RegisterComponent],
  selector: 'app-root',
  styleUrls: ['./app.css'],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Demo');

  ShowLanguage_Window = false;
  ShowSettings_Window = false;
  ShowRegister_Window = false;

  ShowLanguage() {
    this.ShowSettings_Window = false;
    this.ShowRegister_Window = false;
    this.ShowLanguage_Window = !this.ShowLanguage_Window;
  }

  ShowSettings() {
    this.ShowLanguage_Window = false;
    this.ShowRegister_Window = false;
    this.ShowSettings_Window = !this.ShowSettings_Window;
  }

  ShowRegister() {
    this.ShowLanguage_Window = false;
    this.ShowSettings_Window = false;
    this.ShowRegister_Window = !this.ShowRegister_Window;
  }

  ChosenLanguage = 'Polish';

  ChangeLanguage(language: string) {
    this.ChosenLanguage = language;
  }
}