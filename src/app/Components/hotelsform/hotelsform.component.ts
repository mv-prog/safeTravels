import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  // public showBrowserBanners: boolean;
  search = {
    searchInput: 'All hotels and places',
    dateRange: '',
    adultsNumber: 2,
    childrenNumber: 0,
    roomsNumber: 1,
  };
  @Input() showBrowserBanners;
  @Output() dontShowBB = new EventEmitter<void>();
  constructor() {
    // this.showBrowserBanners = true;
  }

  // tslint:disable-next-line: typedef
  dontShowbb(){
    this.dontShowBB.emit(this.showBrowserBanners);
  }

  ngOnInit(): void {
  }
  public getSearch(adultsNumber: HTMLInputElement, childrenNumber: HTMLInputElement, roomsNumber: HTMLInputElement): void {
    this.adultsNumber = Number(adultsNumber.value),
      this.childrenNumber = Number(childrenNumber.value),
      this.roomsNumber = Number(roomsNumber.value);
  }

  // tslint:disable-next-line: typedef
  // public getOptions() {
  //   return this.options;
  // }
  // public getAdultsNumber(): number{
  //   return this.adultsNumber;
  // }
  // public getRoomsNumber(): number{
  //   return this.roomsNumber;
  // }
  // public getChildrenNumber(): number{
  //   return this.childrenNumber;
  // }
  // // tslint:disable-next-line: typedef
  // public setOptions(options1) {
  //   this.options = options1;
  // }
  // // tslint:disable-next-line: typedef
  // public setAdultsNumber(adults: number){
  //   this.adultsNumber = adults;
  // }
  // // tslint:disable-next-line: typedef
  // public setRoomsNumber(rooms: number){
  //   this.roomsNumber = rooms;
  // }
  // // tslint:disable-next-line: typedef
  // public setChildrenNumber(children: number){
  //   this.childrenNumber = children;
  // }
}
