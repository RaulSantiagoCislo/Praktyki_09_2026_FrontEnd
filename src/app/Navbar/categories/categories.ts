import { Component } from '@angular/core';
import { Culture } from './ShownCategories/Culture/Culture';




@Component({
  imports: [Culture],
  selector: 'app-categories',
  styleUrl: './categories.css',
  templateUrl: './categories.html',
})
export class Categories {
  Shown = false;
  HoverPage3 = false;

  CategoriesOption() {
    this.Shown = !this.Shown;
  }

  ShowPage3() {
    this.HoverPage3 = true;
  }

  HidePage3() {
    this.HoverPage3 = false;
  }
}
