import { Component, OnInit } from '@angular/core';
import { HdataService } from 'src/app/hdata.service';
import { ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { ThemePalette } from '@angular/material/core';
import { FilterPipe } from './../filter.pipe';
import { OrderByPipe } from './../order-by.pipe';
import { HttpClient } from '@angular/common/http';
import { Hotel } from './../../models/hotel.model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

export interface Star {
  id?: string;
  starname?: string;
  color?: ThemePalette;
  stars?: Star[];
}

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  hotels?: Hotel[];
  hotel?: Hotel;
  curIndex = -1;
  id = 0;
  name = '';
hotelslist$: Observable<Hotel[]>;
selectedId: number;


  selected = 'recommended';
  star: Star = {
    stars: [
      { id: '1', starname: '1 star', color: 'accent' },
      { id: '2', starname: '2 stars', color: 'accent' },
      { id: '3', starname: '3 stars', color: 'accent' },
      { id: '4', starname: '4 stars', color: 'accent' },
      { id: '5', starname: '5 stars', color: 'accent' }
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
  constructor(private hDataService: HdataService, public route: ActivatedRoute) {
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
    this.getHotels();
  }
  showIdData(data): void{
    console.log(data);
  }
  getHotels(): void {
    this.hDataService.getAllHotels().
    subscribe(
      hoteldata => {
        this.hotels = hoteldata;
        console.log(hoteldata);
      },
      error => {
        console.log(error);
      }
    );
  }
  searchHotelById(id: any): void {
    this.hDataService.getHotelById(id).
    subscribe(
      hoteldata => {
        this.hotels = hoteldata;
        console.log(hoteldata);
      },
      error => {
        console.log(error);
      }
    );
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

  // tslint:disable-next-line: typedef
  sendHotelIdHandler(id: number){
    this.id = id;
    console.log(id);
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
// this shouldn't be here but at the end of my mini-hotels-form browser component.
getHotelByName(): void{
  this.hDataService.getHotelByName(this.name)
  .subscribe(
    data => {
      this.hotels = data;
      console.log(data);
    },
    error => {
      console.log(error);
    }
  );
}
}

