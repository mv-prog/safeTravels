import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaHotelComponent } from './hotel-details.component';

describe('FichaHotelComponent', () => {
  let component: FichaHotelComponent;
  let fixture: ComponentFixture<FichaHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
