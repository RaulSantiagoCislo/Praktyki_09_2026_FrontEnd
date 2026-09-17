import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/authorization/auth';
import { LoginRequest } from '../../models/auth.models';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  @Output() OpenRegister = new EventEmitter<void>();
  @Output() UserLoggedIn = new EventEmitter<string>(); // Dodane do przekazania maila do profilu

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
        this.UserLoggedIn.emit(this.email); // Emitujemy maila po udanym logowaniu
      },
      error: (error: any) => {
        console.error('Błąd logowania:', error);
      },
    });
  }
}