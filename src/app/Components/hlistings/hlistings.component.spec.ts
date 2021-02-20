import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HlistingsComponent } from './hlistings.component';

describe('HlistingsComponent', () => {
  let component: HlistingsComponent;
  let fixture: ComponentFixture<HlistingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HlistingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HlistingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
