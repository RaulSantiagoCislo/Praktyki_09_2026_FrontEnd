import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './Rejestr.html',
  styleUrl: './rejestr.css',
})
export class Rejestr {
  // UWAGA: Zmienna i funkcja muszą być DOKŁADNIE tutaj, między nawiasami { }

  pokazFormularzRejestru = false;

  kliknijPrzycisk() {
    this.pokazFormularzRejestru = !this.pokazFormularzRejestru;
  }
}
