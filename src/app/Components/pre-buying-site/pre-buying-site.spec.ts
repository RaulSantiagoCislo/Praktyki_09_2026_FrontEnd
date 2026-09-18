import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreBuyingSite } from './pre-buying-site';

describe('PreBuyingSite', () => {
  let component: PreBuyingSite;
  let fixture: ComponentFixture<PreBuyingSite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreBuyingSite],
    }).compileComponents();

    fixture = TestBed.createComponent(PreBuyingSite);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
