import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.html',
})
export class AdminPanel {
  events = [
    { id: 1, title: 'Nowe wydarzenie', date: 'Data wydarzenia', location: 'Miejsce wydarzenia' },
    { id: 2, title: 'Nowe wydarzenie', date: 'Data wydarzenia', location: 'Miejsce wydarzenia' },
  ];

  users = [
    { id: 1, name: 'Nowy użytkownik', email: 'adres@email.pl', role: 'Rola użytkownika' },
    { id: 2, name: 'Nowy użytkownik', email: 'adres@email.pl', role: 'Rola użytkownika' },
  ];

  addEvent() {
    const id = Date.now();
    this.events = [...this.events, {
      id,
      title: 'Nowe wydarzenie',
      date: 'Data wydarzenia',
      location: 'Miejsce wydarzenia',
    }];
  }

  removeEvent(id: number) {
    this.events = this.events.filter((event) => event.id !== id);
  }

  addUser() {
    const id = Date.now();
    this.users = [...this.users, {
      id,
      name: 'Nowy użytkownik',
      email: 'adres@email.pl',
      role: 'Rola użytkownika',
    }];
  }

  removeUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
