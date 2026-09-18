import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Services/authorization/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  @Output() CloseLogin = new EventEmitter<void>();
  @Output() OpenRegister = new EventEmitter<void>();
  @Output() UserLoggedIn = new EventEmitter<any>();
  
  loginForm: FormGroup;
  errorMessage: string | null = null;
  showSuccessModal = false;
  loggedInUserData: any = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.errorMessage = null;

    if (this.loginForm.valid) {
      const credentials = {
        email: this.loginForm.value.email?.trim() || '',
        password: this.loginForm.value.password || ''
      };

      this.authService.login(credentials as any).subscribe({
        next: (response: any) => {
          // Łączymy odpowiedź z API z danymi wpisanymi w formularzu
          this.loggedInUserData = {
            ...(typeof response === 'object' ? response : {}),
            email: (typeof response === 'object' && response?.email) ? response.email : credentials.email,
            phone: (typeof response === 'object' && response?.phone) ? response.phone : (response?.phoneNumber || response?.user?.phone || '')
          };
          
          this.showSuccessModal = true;
        },
        error: (error) => {
          if (error.status === 400 || error.status === 401) {
            this.errorMessage = 'Nieprawidłowy e-mail lub hasło.';
          } else {
            this.errorMessage = 'Wystąpił błąd serwera. Spróbuj ponownie później.';
          }
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
    this.UserLoggedIn.emit(this.loggedInUserData);
    this.loginForm.reset();
    this.CloseLogin.emit();
  }

  onCancel(): void {
    this.loginForm.reset();
    this.CloseLogin.emit();
  }
}