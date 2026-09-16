import { Component } from '@angular/core';
import { Culture } from './ShowCategories/culture/culture';
import { Enterteinment } from './ShowCategories/enterteinment/enterteinment';
// fixed finally

@Component({
  imports: [Culture, Enterteinment],
  selector: 'app-categories',
  styleUrl: './categories.css',
  templateUrl: './categories.html',
})
export class Categories {
  isShown = false;
  hoveredPage: string | null = null;

  toggleCategories() {
    this.isShown = !this.isShown;
  }

  setHover(pageName: string | null) {
    this.hoveredPage = pageName;
  }
}
// a
