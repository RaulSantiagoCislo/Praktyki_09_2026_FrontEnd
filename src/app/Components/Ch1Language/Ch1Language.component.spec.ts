import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-Ch1Language',
  standalone: true,
  imports: [],
  templateUrl: './Ch1Language.component.html',
  styleUrl: './Ch1Language.component.css',
})
export class Ch1Language {
  @Output() Close = new EventEmitter<void>();

  SelectLanguage() {
    this.Close.emit();
  }
}
