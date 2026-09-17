import { Component, signal } from '@angular/core';
import { LoginComponent } from './Components/login/login.component';
import { Ch1Language } from './Components/Ch1Language/Ch1Language';
import { Settings } from './Components/Settings/Settings';
import { RegisterComponent } from './Components/register/register.component';
import { UserProfileComponent, UserData } from './Components/user-profile/user-profile.component';

@Component({
  imports: [
    LoginComponent, 
    Ch1Language, 
    Settings, 
    RegisterComponent, 
    UserProfileComponent
  ],
  selector: 'app-root',
  styleUrls: ['./app.css'],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Demo');

  ShowLanguage_Window = false;
  ShowSettings_Window = false;
  ShowRegister_Window = false;

  // Nowe zmienne dla logowania i profilu
  isLoggedIn = false;
  currentUser: UserData | null = null;
  registrationSuccessMessage = false;

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

  // Obsługa po udanej rejestracji
  onRegistered() {
    this.ShowRegister_Window = false;
    this.registrationSuccessMessage = true;
  }

  // Zamykanie pop-upu informującego o utworzeniu konta
  closeRegistrationModal() {
    this.registrationSuccessMessage = false;
  }

  // Obsługa po udanym zalogowaniu
  onLoggedIn(email: string) {
    this.isLoggedIn = true;
    this.registrationSuccessMessage = false;
    this.currentUser = {
      email: email || 'uzytkownik@globallogic.com',
      createdAt: new Date()
    };
  }

  // Wylogowanie
  Logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
  }

  ChosenLanguage = 'Polish';

  ChangeLanguage(language: string) {
    this.ChosenLanguage = language;
  }
}