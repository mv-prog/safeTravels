import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-hotelsform',
  templateUrl: './hotelsform.component.html',
  styleUrls: ['./hotelsform.component.scss']
})
export class HotelsformComponent implements OnInit {
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  public options = ['Mallorca', 'Santiago', 'Ca Sa Padrina d\'Artà'];
  public hideIndication = true;
  public adultsNumber: number;
  public roomsNumber: number;
  public childrenNumber: number;
  search = {
    searchInput: 'All hotels and places',
    dateRange: '',
    adultsNumber: 2,
    childrenNumber: 0,
    roomsNumber: 1,
  };
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  public getSearch(adultsNumber: HTMLInputElement, childrenNumber: HTMLInputElement, roomsNumber: HTMLInputElement) {
    this.adultsNumber = Number(adultsNumber.value),
      this.childrenNumber = Number(childrenNumber.value),
      this.roomsNumber = Number(roomsNumber.value);
  }
}
