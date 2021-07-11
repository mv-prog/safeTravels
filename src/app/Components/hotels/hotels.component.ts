import { Component, OnInit } from '@angular/core';
import { HdataService } from 'src/app/hdata.service';
import { ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { ThemePalette } from '@angular/material/core';
import { FilterPipe } from './../filter.pipe';
import { OrderByPipe } from './../order-by.pipe';
import { HttpClient } from '@angular/common/http';
import { Hotel } from './../../models/hotel.model';
// import {}
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
      { id: '1', name: '1 star', color: 'accent' },
      { id: '2', name: '2 stars', color: 'accent' },
      { id: '3', name: '3 stars', color: 'accent' },
      { id: '4', name: '4 stars', color: 'accent' },
      { id: '5', name: '5 stars', color: 'accent' }
    ]
  };
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  public options = ['A Coruña', 'Santiago', 'Hotel A Casa'];
  public hideIndication = true;
  public adultsNumber: number;
  public roomsNumber: number;
  public childrenNumber: number;
  // public showBrowserBanners: boolean;
  public isFalse: boolean;
  public name: string;
  public search: any = {
    searchInput: 'All hotels and places',
    dateRange: '',
    adultsNumber: 2,
    childrenNumber: 0,
    roomsNumber: 1,
  };
  public hotelPath;
  showBrowserBanners: boolean;
   public dataList: any;
  // dataList: any = [];
  // dataList: Hotel;
  // constructor(private hdataservice: HdataService) { this used to consume the json server data.
  constructor(private http: HttpClient) {
  }
  Search(): any{
    this.dataList = this.dataList.filter(res => {
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
  reload(): void {
    window.location.reload();
}
public dontShowbb(): boolean {
  return this.showBrowserBanners = false;
}
  public dontShowBrowserBanners(showBrowserBanners: boolean): boolean {
    return showBrowserBanners = false;
  }
  public showbrowserbanners(showBrowserBanners: boolean): boolean {
    return showBrowserBanners = true;
  }

  ngOnInit(): void {
    this.hotelPath = window.location.origin + '/hotel/';
    console.log(this.hotelPath);
    // this.hdataservice.getHData().subscribe(response => {
    //   this.dataList = response;
    // });
    const response = this.http.get('http://localhost:8080/hotels');
    // tslint:disable-next-line: deprecation
    response.subscribe((data) => this.dataList = data);
  }
  // tslint:disable-next-line: typedef
  public getSearch(adultsNumber: HTMLInputElement, childrenNumber: HTMLInputElement, roomsNumber: HTMLInputElement) {
    this.adultsNumber = Number(adultsNumber.value),
      this.childrenNumber = Number(childrenNumber.value),
      this.roomsNumber = Number(roomsNumber.value);
  }

  // Local filter
performFilter(filterBy: string): any {
  if (filterBy) {
      filterBy = filterBy.toLocaleLowerCase();
      return this.dataList.filter((hotel: any) =>
          hotel.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  } else {
      return this.dataList;
  }
}
  calculatePercentage(orPrice, percentage): number {
    return orPrice - (orPrice * percentage / 100);
  }
  getHotelsData(e): any{
    return e;
  }
}

