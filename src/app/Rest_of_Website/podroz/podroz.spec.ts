import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Podroz } from './podroz';

describe('Podroz', () => {
  let component: Podroz;
  let fixture: ComponentFixture<Podroz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Podroz],
    }).compileComponents();

    fixture = TestBed.createComponent(Podroz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
