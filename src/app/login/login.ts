import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  pokazLogowanie = false;
  pokazRejestracja = false;

  przelaczLogowanie() {
    this.pokazLogowanie = !this.pokazLogowanie;
    this.pokazRejestracja = false;
  }

  przelaczRejestracje() {
    this.pokazRejestracja = !this.pokazRejestracja;
    this.pokazLogowanie = false;
  }
}