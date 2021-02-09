import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  public options = ['bla', 'bla', 'bla'];
  public hideIndication = true;
  public adultsNumber: number;
  public roomsNumber: number;
  public childrenNumber: number;
  search = {
    searchInput: 'oneHotel',
    dateRange: '',
    adultsNumber: 2,
    childrenNumber: 0,
    roomsNumber: 1,
  };
  constructor() {}
  // tslint:disable-next-line: typedef
  public getSearch(adultsNumber: HTMLInputElement, childrenNumber: HTMLInputElement, roomsNumber: HTMLInputElement) {
  this.adultsNumber = Number(adultsNumber.value),
    this.childrenNumber = Number(childrenNumber.value),
    this.roomsNumber = Number(roomsNumber.value);
}


}
