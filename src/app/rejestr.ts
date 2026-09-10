import { Component } from '@angular/core';

@Component({
  selector: 'app-rejestr',
  standalone: true,
  imports: [],
  templateUrl: './Rejestr.html',
  styleUrl: './rejestr.css',
})
export class Rejestr {
  pokazFormularzRejestru = false;

  otworzOkno() {
    this.pokazFormularzRejestru = true;
  }

  zamknijOkno() {
    this.pokazFormularzRejestru = false;
  }
}