import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-Ch1Language',
  standalone: true,
  imports: [],
  templateUrl: './Ch1Language.html',
  styleUrl: './Ch1Language.css',
})
export class Ch1Language {
  @Output() zamknij = new EventEmitter<void>();

  WybierzJ() {
    this.zamknij.emit();
  }
}
