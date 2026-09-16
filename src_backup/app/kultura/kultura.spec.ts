import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Kultura } from './kultura';

describe('Kultura', () => {
  let component: Kultura;
  let fixture: ComponentFixture<Kultura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kultura],
    }).compileComponents();

    fixture = TestBed.createComponent(Kultura);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
