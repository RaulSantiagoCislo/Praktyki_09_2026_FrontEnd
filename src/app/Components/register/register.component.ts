import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Services/authorization/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  // styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() CloseRegister = new EventEmitter<void>();
  @Output() UserRegistered = new EventEmitter<void>();

  registerForm: FormGroup;
  showSuccessModal = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    this.errorMessage = null;

    if (this.registerForm.valid) {
      const formValues = this.registerForm.value;

      const payload = {
        name: formValues.firstName?.trim() || '',
        surname: formValues.lastName?.trim() || '',
        email: formValues.email?.trim() || '',
        phone: formValues.phone?.trim() || '',
        password: formValues.password || '',
        user_type: 'user'
      };

      // Zapisujemy telefon i email tymczasowo w pamięci przeglądarki
      if (payload.email) {
        localStorage.setItem(`user_phone_${payload.email.toLowerCase()}`, payload.phone);
      }

      this.authService.register(payload as any).subscribe({
        next: () => {
          this.handleSuccess();
        },
        error: (error) => {
          if (error.status === 201 || error.status === 200) {
            this.handleSuccess();
          } else if (error.status === 400) {
            this.errorMessage = typeof error.error === 'string' ? error.error : 'Błąd rejestracji.';
          } else {
            this.errorMessage = 'Wystąpił błąd serwera. Spróbuj ponownie później.';
          }
        }
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  private handleSuccess(): void {
    this.showSuccessModal = true;
    this.registerForm.reset();
    this.UserRegistered.emit();
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
    this.CloseRegister.emit();
  }

  onCancel(): void {
    this.registerForm.reset();
    this.CloseRegister.emit();
  }
}
