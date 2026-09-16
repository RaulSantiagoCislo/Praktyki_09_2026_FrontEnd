import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Enterteinment } from './Enterteinment';

describe('Enterteinment', () => {
  let component: Enterteinment;
  let fixture: ComponentFixture<Enterteinment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enterteinment],
    }).compileComponents();

    fixture = TestBed.createComponent(Enterteinment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
