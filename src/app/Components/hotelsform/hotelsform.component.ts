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
  @Input() showBrowserBanners;
  @Input() search;
  @Output() dontShowBB = new EventEmitter<void>();
  @Output() sendHotelsData = new EventEmitter<void>();
  constructor() {
    // this.showBrowserBanners = true;
  }
  // tslint:disable-next-line: typedef
  dontShowbb(){
    this.showBrowserBanners = false;
    this.dontShowBB.emit(this.showBrowserBanners);
  }
  // tslint:disable-next-line: typedef
  sendData(){
    this.sendHotelsData.emit(this.search);
  }
  ngOnInit(): void {
  }
  // checkValueInHotels(): {

  // }
}
