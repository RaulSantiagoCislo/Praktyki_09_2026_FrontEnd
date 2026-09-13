import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  // UWAGA: Zmienna i funkcja muszą być DOKŁADNIE tutaj, między nawiasami { }
  
  pokazFormularz = false;

  kliknijPrzycisk() {
    this.pokazFormularz = !this.pokazFormularz;
  }
}