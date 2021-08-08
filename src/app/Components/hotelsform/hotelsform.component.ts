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
  form: any = {
    searchInput: null,
    dateRange: null,
    adultsNumber: null,
    childrenNumber: null,
    roomsNumber: null
  };
  constructor(){

  }
  /**
   * dontShowbb
   * emits a boolean variable, showBrowserBanners, set to false, in order not to show this component in the parent component.
   */
  dontShowbb(): any{
    this.showBrowserBanners = false;
    this.dontShowBB.emit(this.showBrowserBanners);
  }

  // tslint:disable-next-line: typedef
  /**
   * sendData
   * emits/outputs the search input gotten in the hotels form.
   */
  sendData(): any{
    this.sendHotelsData.emit(this.search);
  }
  ngOnInit(): void {
  }
}
