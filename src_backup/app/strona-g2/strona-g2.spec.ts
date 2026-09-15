import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiteG2 } from './Site_G2';

describe('SiteG2', () => {
  let component: SiteG2;
  let fixture: ComponentFixture<SiteG2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteG2],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteG2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
