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
  ShowLogin_Window = false;
  ShowProfile_Window = false;

  isLoggedIn = false;
  currentUser: UserData | null = null;
  registrationSuccessMessage = false;

  ShowLogin() {
    this.closeAllWindows();
    this.ShowLogin_Window = true;
  }

  ShowRegister() {
    this.closeAllWindows();
    this.ShowRegister_Window = true;
  }

  ShowProfile() {
    this.closeAllWindows();
    this.ShowProfile_Window = !this.ShowProfile_Window;
  }

  ShowLanguage() {
    this.closeAllWindows();
    this.ShowLanguage_Window = !this.ShowLanguage_Window;
  }

  ShowSettings() {
    this.closeAllWindows();
    this.ShowSettings_Window = !this.ShowSettings_Window;
  }

  private closeAllWindows() {
    this.ShowLanguage_Window = false;
    this.ShowSettings_Window = false;
    this.ShowRegister_Window = false;
    this.ShowLogin_Window = false;
  }

  onRegistered() {
    this.ShowRegister_Window = false;
    this.registrationSuccessMessage = true;
  }

  closeRegistrationModal() {
    this.registrationSuccessMessage = false;
    this.ShowLogin();
  }

  onLoggedIn(userData: any) {
    this.isLoggedIn = true;
    this.ShowLogin_Window = false;
    this.registrationSuccessMessage = false;

    let emailVal = '';
    let phoneVal = '';

    if (typeof userData === 'string') {
      emailVal = userData;
    } else if (userData && typeof userData === 'object') {
      emailVal = userData.email || userData.user?.email || userData.username || '';
      phoneVal = userData.phone || userData.user?.phone || userData.phoneNumber || userData.telephone || '';
    }

    // Jeśli backend nie podał numeru telefonu, wyciągamy go z pamieci podręcznej pod ten email
    if (!phoneVal && emailVal) {
      const savedPhone = localStorage.getItem(`user_phone_${emailVal.toLowerCase()}`);
      if (savedPhone) {
        phoneVal = savedPhone;
      }
    }

    this.currentUser = {
      email: emailVal || 'uzytkownik@globallogic.com',
      phone: phoneVal || '',
      createdAt: userData?.createdAt ? new Date(userData.createdAt) : new Date()
    };
  }

  Logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
    this.ShowProfile_Window = false;
  }

  ChosenLanguage = 'Polish';

  ChangeLanguage(language: string) {
    this.ChosenLanguage = language;
  }
}