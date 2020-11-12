import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesListComponent } from './hobbies-list.component';

describe('HobbiesListComponent', () => {
  let component: HobbiesListComponent;
  let fixture: ComponentFixture<HobbiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
