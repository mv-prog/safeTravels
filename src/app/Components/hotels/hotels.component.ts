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
  //all hotels:
  hotels?: Hotel[];
  hotelsByNameContaining?: Hotel[];
  hotelsByProvince?: Hotel[];
  hotelsByCity?: Hotel[];
  allHotels?: Hotel[];
  hotel?: Hotel;
  id = 0;
  name = '';

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
  public options = ['A Coruña', 'Santiago', 'Hostal dos Reis Católicos'];
  public provinces = ['A Coruña', 'Ourense', 'Pontevedra', 'Lugo'];
  public cities = ['Santiago', 'Santiago de Compostela', 'Sober'];
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
  searchInput: string;
  // constructor(private hdataservice: HdataService) { this used to consume the json server data.
  constructor(private hDataService: HdataService, public route: ActivatedRoute) {
    let totalLength = 1
    for (var i = 0; i <= totalLength; i++) {
      // this.allHotels.push(this.hotels[i]);
      // if (this.getHotelsByCity[i] != null && this.getHotelsByCity[i] != undefined) {
      //   totalLength +=this.hotelsByCity.length;
      //   this.allHotels.push(this.hotelsByCity[i]);
      // }
      // if (this.getHotelsByCity[i] != null && this.hotelsByProvince[i] != undefined) {
      //   totalLength += this.hotelsByProvince.length;
      //   this.allHotels.push(this.hotelsByProvince[i]);
      // }
      // if (this.getHotelsByCity[i] != null && this.hotelsByNameContaining[i] != undefined) {
      //   totalLength += this.hotelsByNameContaining.length
      //   this.allHotels.push(this.hotelsByNameContaining[i]);
      // }
    }


  }

  Search(): any {
    this.hotels = this.hotels.filter(res => {
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
    // this.getHotels();
    // subscribo os datos a unha varable que creo e que é a que vou chamar por doquier
    this.hDataService.searchInputToObservable.subscribe(searchinput => {
      this.searchInput = searchinput
      this.getHotelsByName(this.searchInput);
    });
    // this.getHotelsByCity(this.searchInput);
    // this.getHotelsByProvince(this.searchInput);
    this.getHotelsByName(this.searchInput);
  }
  showIdData(data): void {
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
  getHotelsData(e): any {
    return e;
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
  getHotelsByCity(city): void {
    this.hDataService.getHotelsByCity(city)
      .subscribe(
        data => {
          this.hotelsByCity = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
  getHotelsByProvince(province): void {
    this.hDataService.getHotelsByProvince(province)
      .subscribe(
        data => {
          this.hotelsByProvince = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
  getHotelsByName(name): void {
    this.hDataService.getHotelsByName(name)
      .subscribe(
        data => {
          this.hotelsByNameContaining = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

}

