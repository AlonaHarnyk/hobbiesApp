import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyDetailsComponent } from './hobby-details.component';

describe('HobbyDetailsComponent', () => {
  let component: HobbyDetailsComponent;
  let fixture: ComponentFixture<HobbyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
