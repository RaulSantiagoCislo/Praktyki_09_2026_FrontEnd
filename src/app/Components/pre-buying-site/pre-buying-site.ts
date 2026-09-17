import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-pre-buying-site',
  // styleUrl: './',
  templateUrl: './pre-buying-site.html',
})
export class PreBuyingSite {
  eventInformation = { id: 1, name: 'a', date: 'a', location: 'a', organizer: 'a' };

  tickets = [
    { id: 1, date: 'a', time: '8:00 - 9:00' },
    { id: 2, date: 'a', time: '8:00 - 9:00' },
    { id: 3, date: 'a', time: '8:00 - 9:00' },
    { id: 4, date: 'a', time: '8:00 - 9:00' },
  ];

  constructor(private router: Router) {}

  Exit() {
    this.router.navigate(['/']);
  }
}
