import { Component, OnInit } from '@angular/core';
import { HdataService } from 'src/app/hdata.service';
import { ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { ThemePalette } from '@angular/material/core';
import { FilterPipe } from './../filter.pipe';
export interface Star {
  id?: string;
  name?: string;
  color?: ThemePalette;
  stars?: Star[];
}

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  selected = 'recommended';
  star: Star = {
    stars: [
      { id: '1', name: '1 star', color: 'primary' },
      { id: '2', name: '2 stars', color: 'primary' },
      { id: '3', name: '3 stars', color: 'primary' },
      { id: '4', name: '4 stars', color: 'primary' },
      { id: '5', name: '5 stars', color: 'primary' }
    ]
  };
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  public options = ['Mallorca', 'Santiago', 'Ca Sa Padrina d\'Artà'];
  public hideIndication = true;
  public adultsNumber: number;
  public roomsNumber: number;
  public childrenNumber: number;
  public showBrowserBanners: boolean;
  public isFalse: boolean;
  search = {
    searchInput: 'All hotels and places',
    dateRange: '',
    adultsNumber: 2,
    childrenNumber: 0,
    roomsNumber: 1,
  };
  dataList: any = [];
  constructor(private hdataservice: HdataService) {
    this.showBrowserBanners = true;
    this.isFalse = false;
  }
  reload(): void {
    window.location.reload();
}
  public dontShowBrowserBanners(e): void {
    this.showBrowserBanners = false;
  }
  public showbrowserbanners(e): void {
    this.showBrowserBanners = true;
  }
  ngOnInit(): void {
    this.hdataservice.getHData().subscribe(response => {
      this.dataList = response;
    });
  }
  // tslint:disable-next-line: typedef
  public getSearch(adultsNumber: HTMLInputElement, childrenNumber: HTMLInputElement, roomsNumber: HTMLInputElement) {
    this.adultsNumber = Number(adultsNumber.value),
      this.childrenNumber = Number(childrenNumber.value),
      this.roomsNumber = Number(roomsNumber.value);
  }
  calculatePercentage(orPrice, percentage): number {
    return orPrice - (orPrice * percentage / 100);
  }
  getHotelsData(e): any{
    return e;
  }
}

