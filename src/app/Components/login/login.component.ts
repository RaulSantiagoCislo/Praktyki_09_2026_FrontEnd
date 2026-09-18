import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/authorization/auth';
import { LoginRequest } from '../../models/auth.models';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @Output() OpenRegister = new EventEmitter<void>();

  ShowForm1 = false;
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  UseButton() {
    this.ShowForm1 = !this.ShowForm1;
  }

  PokazRejestracje() {
    this.OpenRegister.emit();
  }

  LoginUser() {
    const data: LoginRequest = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(data).subscribe({
      next: (response: any) => {
        console.log('Logowanie udane!');
        console.log('Token:', response.token);
        localStorage.setItem('token', response.token);
        this.ShowForm1 = false;
      },
      error: (error: any) => {
        console.error('Błąd logowania:', error);
      },
    });
  }
}