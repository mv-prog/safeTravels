import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitybannersComponent } from './citybanners.component';

describe('CitybannersComponent', () => {
  let component: CitybannersComponent;
  let fixture: ComponentFixture<CitybannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitybannersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitybannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
