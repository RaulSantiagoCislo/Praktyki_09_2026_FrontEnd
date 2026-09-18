import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Ticket {
  id: number;
  date: string;
  time: string;
}

interface EventInformation {
  id: number;
  name: string;
  date: string;
  location: string;
  organizer: string;
}

@Component({
  selector: 'app-pre-buying-site',
  imports: [],
  templateUrl: './pre-buying-site.html',
})
export class PreBuyingSite {
  eventInformation: EventInformation = {
    id: 1,
    name: 'a',
    date: 'a',
    location: 'a',
    organizer: 'a',
  };

  tickets: Ticket[] = [
    { id: 1, date: 'a', time: '8:00 - 9:00' },
    { id: 2, date: 'a', time: '8:00 - 9:00' },
    { id: 3, date: 'a', time: '8:00 - 9:00' },
    { id: 4, date: 'a', time: '8:00 - 9:00' },
  ];

  constructor(private router: Router) {}

  Exit(): void {
    this.router.navigate(['/']);
  }
}
