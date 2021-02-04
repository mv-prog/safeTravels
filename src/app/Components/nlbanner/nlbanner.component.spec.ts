import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlbannerComponent } from './nlbanner.component';

describe('NlbannerComponent', () => {
  let component: NlbannerComponent;
  let fixture: ComponentFixture<NlbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NlbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
