import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rozrywka } from './rozrywka';

describe('Rozrywka', () => {
  let component: Rozrywka;
  let fixture: ComponentFixture<Rozrywka>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rozrywka],
    }).compileComponents();

    fixture = TestBed.createComponent(Rozrywka);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
