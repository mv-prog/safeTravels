import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyRegulationsComponent } from './safety-regulations.component';

describe('SafetyRegulationsComponent', () => {
  let component: SafetyRegulationsComponent;
  let fixture: ComponentFixture<SafetyRegulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyRegulationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyRegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
