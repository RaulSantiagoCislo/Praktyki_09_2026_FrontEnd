import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchingResults } from './searching-results';

describe('SearchingResults', () => {
  let component: SearchingResults;
  let fixture: ComponentFixture<SearchingResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchingResults],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchingResults);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
