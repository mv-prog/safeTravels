import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { EventEmitter } from '@angular/core';
import { HdataService } from 'src/app/hdata.service';
import { Hotel } from './../../models/hotel.model';

@Component({
  selector: 'app-mini-hotels-form',
  templateUrl: './mini-hotels-form.component.html',
  styleUrls: ['./mini-hotels-form.component.scss']
})
export class MiniHotelsFormComponent implements OnInit {
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  @Input() search;
  @Output() sendHotelsData = new EventEmitter<void>();
  @Output() sendHotelId = new EventEmitter<void>();
  public options = ['All places', 'Santiago', 'Lugo capital', 'Portelo Rural'];
  hotels?: Hotel[];
  curHotel?: Hotel;
  curIndex = -1;
  id = 0;
  form: any = {
    searchInput: null,
    dateRange: null,
    rooms: null,
    adults: null,
    children: null
  };
  searchInput: string;
  constructor(private hDataService: HdataService) { }
  public adRoOptions = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10}
  ];

  public adSelected = this.adRoOptions[1].id;

  public chOptions = [
    {id: 0},
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10}
  ];
  public chSelected = this.chOptions[0].id;

  public roSelected = this.adRoOptions[0].id;
  sendData(): any{
    this.sendHotelsData.emit(this.search);
  }
  ngOnInit(): void {
    // this.getHotels();
        // subscribo os datos a unha varable que creo e que é a que vou chamar por doquier
        this.hDataService.searchInputToObservable.subscribe(searchinput => this.searchInput = searchinput);
  }
    /**
   * updateSearchInput
   * actualizo a variable creada cos datos do meu ngModel.
   * */ 
     updateSearchInput(){
      this.hDataService.editSearchInputData(this.form.searchInput);
    }
    onSubmit(): void {
      this.updateSearchInput();
      this.reloadPage();
    }
  
    reloadPage(): void {
      window.location.reload();
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
  refreshList(): void {
    this.getHotels();
    this.curHotel = undefined;
    this.curIndex = -1;
  }

  setActiveHotel(hotel: Hotel, index: number): void{
    this.curHotel = hotel;
    this.curIndex = index;
  }
  searchHotelById(): void {
    this.hDataService.getHotelById(this.id).
    subscribe(
      hoteldata => {
        this.hotels = hoteldata;
        this.sendHotelId.emit(hoteldata);
        console.log(hoteldata);
      },
      error => {
        console.log(error);
      }
    );
  }
  searchByName(): void {
    this.hDataService.getHotelsByName(this.form.searchInput)
      .subscribe(
        data => {
          this.hotels = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
