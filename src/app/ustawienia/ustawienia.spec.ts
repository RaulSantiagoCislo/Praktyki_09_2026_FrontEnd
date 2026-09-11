import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ustawienia } from './ustawienia';

describe('Ustawienia', () => {
  let component: Ustawienia;
  let fixture: ComponentFixture<Ustawienia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ustawienia],
    }).compileComponents();

    fixture = TestBed.createComponent(Ustawienia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
