import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StronaG2 } from './strona-g2';

describe('StronaG2', () => {
  let component: StronaG2;
  let fixture: ComponentFixture<StronaG2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StronaG2],
    }).compileComponents();

    fixture = TestBed.createComponent(StronaG2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
