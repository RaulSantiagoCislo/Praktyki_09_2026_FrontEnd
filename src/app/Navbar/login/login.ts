import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {
  http = inject(HttpClient);

  zaloguj(emailWpisane: string, hasloWpisane: string) {
    console.log("KYS")
    const daneDoLogowania = {
      email: emailWpisane,
      password: hasloWpisane 
    };

    // tutaj musimy zmienic ip na na ip backendu 
    this.http.post('http://localhost:5015/login', daneDoLogowania).subscribe({
      next: (odpowiedz) => {
        console.log(odpowiedz);
      },
      error: (blad) => {
        console.error(blad);
      }
    });
  }
  
  pokazFormularz = false;

  kliknijPrzycisk() {
    this.pokazFormularz = !this.pokazFormularz;
  }
}

