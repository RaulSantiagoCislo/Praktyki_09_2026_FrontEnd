import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminEvent, AdminUser } from '../../models/admin-panel.models';

@Component({
  imports: [FormsModule],
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
})
export class AdminPanelComponent {
  events: AdminEvent[] = [];
  users: AdminUser[] = [];
  showEventModal = false;
  showUserModal = false;
  newEvent: Omit<AdminEvent, 'id'> = {
    title: '',
    date: '',
    location: '',
  };
  newUser: Omit<AdminUser, 'id'> = {
    name: '',
    email: '',
    role: '',
  };

  openEventModal() {
    this.showEventModal = true;
  }

  closeEventModal() {
    this.showEventModal = false;
  }

  openUserModal() {
    this.showUserModal = true;
  }

  closeUserModal() {
    this.showUserModal = false;
  }

  addEvent() {
    if (!this.newEvent.title || !this.newEvent.date || !this.newEvent.location) {
      return;
    }

    this.events = [...this.events, { id: Date.now(), ...this.newEvent }];
    this.newEvent = { title: '', date: '', location: '' };
    this.closeEventModal();
  }

  removeEvent(id: number) {
    this.events = this.events.filter((event) => event.id !== id);
  }

  addUser() {
    if (!this.newUser.name || !this.newUser.email || !this.newUser.role) {
      return;
    }

    this.users = [...this.users, { id: Date.now(), ...this.newUser }];
    this.newUser = { name: '', email: '', role: '' };
    this.closeUserModal();
  }

  removeUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
