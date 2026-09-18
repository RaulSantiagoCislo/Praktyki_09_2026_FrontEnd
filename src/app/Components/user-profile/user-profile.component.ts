import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface UserData {
  email: string;
  phone?: string;
  createdAt?: Date;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent {
  private _user: UserData = { email: '', phone: '' };
  daysWithUs: number = 1;

  @Input() 
  set user(value: UserData | null) {
    if (value) {
      this._user = value;
      this.calculateDays();
    }
  }

  get user(): UserData {
    return this._user;
  }

  @Output() closeProfile = new EventEmitter<void>();

  private calculateDays() {
    if (this._user.createdAt) {
      const today = new Date();
      const created = new Date(this._user.createdAt);
      const diffTime = Math.abs(today.getTime() - created.getTime());
      this.daysWithUs = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    } else {
      this.daysWithUs = 1;
    }
  }

  onClose() {
    this.closeProfile.emit();
  }
}