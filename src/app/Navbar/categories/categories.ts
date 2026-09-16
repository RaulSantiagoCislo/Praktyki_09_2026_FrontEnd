import { Component } from '@angular/core';
import { Culture } from './ShownCategories/Culture/Culture';


import { Enterteinment } from './ShownCategories/Enterteinment/Enterteinment';
import { Travel } from './ShownCategories/Travel/Travel';


@Component({
  imports: [Culture, Enterteinment, Travel],
  selector: 'app-categories',
  styleUrl: './categories.css',
  templateUrl: './categories.html',
})
export class Categories {
  Shown = false;
  HoverPage3 = false;

  HoverPage1 = false;
  HoverPage2 = false;

  CategoriesOption() {
    this.Shown = !this.Shown;
  }

  ShowPage3() {
    this.HoverPage3 = true;
  }

  HidePage3() {
    this.HoverPage3 = false;
  }

  ShowPage1() {
    this.HoverPage1 = true;
  }

  HidePage1() {
    this.HoverPage1 = false;
  }

  ShowPage2() {
    this.HoverPage2 = true;
  }

  HidePage2() {
    this.HoverPage2 = false;
  }
}
