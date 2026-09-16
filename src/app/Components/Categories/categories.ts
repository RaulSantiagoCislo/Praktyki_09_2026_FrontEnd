import { Component } from '@angular/core';
import { Culture } from './ShowCategories/Culture/Culture';
// import { Enterteinment } from './ShowCategories/Enterteinment/Enterteinment';
import { Travel } from './ShowCategories/Travel/Travel';

@Component({
  imports: [Culture,  Travel],
  // Enterteiment nie działa to dodać    do imports   (  Enterteinment)

  selector: 'app-categories',
  styleUrl: './categories.css',
  templateUrl: './categories.html',
})
export class Categories {
  Shown = false;

  HoverPage1 = false;
  HoverPage2 = false;
  HoverPage3 = false;

  CategoriesOption() {
    this.Shown = !this.Shown;
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

  ShowPage3() {
    this.HoverPage3 = true;
  }

  HidePage3() {
    this.HoverPage3 = false;
  }
}
