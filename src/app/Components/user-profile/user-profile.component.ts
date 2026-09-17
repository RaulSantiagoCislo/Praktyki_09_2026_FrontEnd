import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface UserData {
  email: string;
  createdAt: Date;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  @Input() user: UserData = {
    email: 'jan.kowalski@globallogic.com',
    createdAt: new Date('2026-03-10T14:20:00')
  };

  daysWithUs: number = 0;

  ngOnInit() {
    const now = new Date();
    const created = new Date(this.user.createdAt);
    this.daysWithUs = Math.floor(Math.abs(now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24));
  }
}