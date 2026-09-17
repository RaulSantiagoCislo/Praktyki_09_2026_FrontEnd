import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-pre-buying-site',
  styleUrl: './pre-buying-site.css',
  templateUrl: './pre-buying-site.html',
})
export class PreBuyingSite {
  constructor(private router: Router) {}

  Exit() {
    this.router.navigate(['/']);
  }
}
