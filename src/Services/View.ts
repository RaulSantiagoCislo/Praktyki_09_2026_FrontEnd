import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [], // tu przecink jest wazny jak cos 
  templateUrl: './View.html',
  styleUrl: './View.css',
})
export class Login {
  http = inject(HttpClient);

  zaloguj(emailWpisane: string, hasloWpisane: string) {
    const daneDoLogowania = {
      email: emailWpisane,
      password: hasloWpisane 
    };

    // tutaj musimy zmienic ip na na ip backendu 
    this.http.post('http://192.168.X.X:5015/api/login', daneDoLogowania).subscribe({
      next: (odpowiedz) => {
        console.log(odpowiedz);
      },
      error: (blad) => {
        console.error(blad);
      }
    });
  }
}