import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniHotelsFormComponent } from './mini-hotels-form.component';

describe('MiniHotelsFormComponent', () => {
  let component: MiniHotelsFormComponent;
  let fixture: ComponentFixture<MiniHotelsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniHotelsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniHotelsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
