import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Event {
  id: number;
  category: string;
  city: string;
  street: string;
  event_name: string;
  date: string;
  image: string;
  description: string;
}

@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-searching-results',
  styleUrl: './searching-results.css',
  templateUrl: './searching-results.html',
})
export class SearchingResults implements OnInit {
  eventInformation: Event[] = [];
  filteredEvents: Event[] = [];

  searchText = '';

  private apiUrl = 'http://localhost:5015/events';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.http.get<Event[]>(this.apiUrl).subscribe({
      next: (events) => {
        this.eventInformation = events;
        this.filteredEvents = events;
      },

    });
  }

  searchEvents(): void {
    const search = this.searchText.toLowerCase().trim();

    if (!search) {
      this.filteredEvents = this.eventInformation;
      return;
    }

    this.filteredEvents = this.eventInformation.filter((event) =>
      event.event_name.toLowerCase().includes(search),
    );
  }
}
