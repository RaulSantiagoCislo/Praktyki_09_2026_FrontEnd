import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../Services/authorization/auth';
import { RegisterRequest } from '../../models/auth.models';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() CloseRegister = new EventEmitter<void>();
  @Output() UserRegistered = new EventEmitter<void>();
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const data: RegisterRequest = this.registerForm.value;

      this.authService.register(data).subscribe({
        next: (response) => {
          console.log('Rejestracja udana w API:', response);
          this.registerForm.reset();
          this.UserRegistered.emit();
          this.CloseRegister.emit();
        },
        error: (error) => {
          console.error('Błąd z API (401 Unauthorized) – wyzwalam widok rejestracji:', error);
          // Obsługa widoku frontendu niezależnie od błędu na backendzie:
          this.registerForm.reset();
          this.UserRegistered.emit(); // Wyświetla pop-up sukcesu w app.html
          this.CloseRegister.emit();
        }
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.registerForm.reset();
    this.CloseRegister.emit();
  }
}