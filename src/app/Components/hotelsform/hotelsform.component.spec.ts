import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsformComponent } from './hotelsform.component';

describe('HotelsformComponent', () => {
  let component: HotelsformComponent;
  let fixture: ComponentFixture<HotelsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
