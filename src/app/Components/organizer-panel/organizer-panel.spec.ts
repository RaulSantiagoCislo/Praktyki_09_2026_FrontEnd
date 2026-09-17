import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganizerPanel } from './organizer-panel';

describe('OrganizerPanel', () => {
  let component: OrganizerPanel;
  let fixture: ComponentFixture<OrganizerPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizerPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizerPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
