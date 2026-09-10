import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zjezyki',
  standalone: true,
  imports: [],
  templateUrl: './zjezyki.html',
  styleUrl: './zjezyki.css',
})
export class Zjezyki {
  @Output() zamknij = new EventEmitter<void>();

  WybierzJ() {
    this.zamknij.emit();
  }
}
