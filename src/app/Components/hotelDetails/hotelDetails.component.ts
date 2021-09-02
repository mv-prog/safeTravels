import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Hotel } from '../../models/hotel.model';
import { HdataService } from 'src/app/hdata.service';
import { Observable } from 'rxjs';
import { Room } from 'src/app/models/room.model';
import { TokenStorageService } from './../../token-storage.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotelDetails.component.html',
  styleUrls: ['./hotelDetails.component.scss']
})
export class HotelDetailsComponent implements OnInit {
  @ViewChild('descriptionSection') public descriptionSection: ElementRef;
  @ViewChild('roomsSection') public roomsSection: ElementRef;
  @ViewChild('reviewsSection') public reviewsSection: ElementRef;
  id: number;
  // this is wrong cause there are many rooms in one hotel and I am treating them
  // as one. Do as in the list hotels, and the do an ng-For to go through
  // each room.
  // room$: Observable<Room[]>;
  rooms?: Room[];
  // hotel$: Observable<Hotel[]>;
  hotel: Hotel = {
    id: 0,
    name: '',
    address: '',
    city: '',
    region: '',
    email: '',
    phone: '',
    rating: 0.0,
    price: 0,
    stars: 0,
    numberOfRooms: 0,
    pool: false,
    spa: false,
    wifi: false,
    parking: false,
    airportShuttle: false,
    pets: false,
    electricStation: false,
    discount: 0,
    recommended: false
  };

  description = '';
  public hotelId;
  public curHotel;
  numbers: Array<any> = [];
  isLoggedIn: boolean;
  username: string;
  email: string;
  searchInput: string;
  dateRange: Date[];
  submitted = false;
  fechaInicio: Date;
  fechaFin: Date;
  constructor(
    private hDataService: HdataService,
    public route: ActivatedRoute,
    public datepipe: DatePipe,
    private tokenStorageService: TokenStorageService) {
      this.numbers = Array.from({length: 10}, (v, k) => k + 1);

     }
  ngOnInit(): void {
    // with the snapshot one can get a parameter, but in order to get the whole thing and get changes done inside the component,
    // not just the url, you need to subscribe.
    // this.id = this.route.snapshot.paramMap.get('id');
    // this.hotel = this.hDataService.getHotelById(this.id); --> this is not working
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
    });
    this.hDataService.searchInputToObservable.subscribe(searchinput => this.searchInput = searchinput);
    console.log("searchInput in hotelDetails", this.searchInput);
    this.hDataService.datesFormData.subscribe(dateRange => {
     console.log("dateRange", dateRange); 
      this.dateRange = dateRange;
    });
    console.log("dateRange in hotelDetails", this.dateRange);
    this.getHotel(this.route.snapshot.paramMap.get('id'));
    this.getRoomsById(this.id);
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      console.log(user);
      this.username = user.username;
      this.email = user.email;
    }
    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
      this.fechaInicio = params.fechaInicio;
      this.fechaFin = params.fechaFin;
      console.log(this.fechaFin); 
    }
  );
  }
  getRoomsById(id: any): void {
    this.hDataService.getAllRoomsByHotel(id).
    subscribe(
      roomsdata => {
        this.rooms = roomsdata;
        console.log(this.rooms);
      },
      error => {
        console.log(error);
      }
    );
  }
  getRooms(): void{
    this.hDataService.getAllRooms().
    subscribe(
      roomsdata => {
        this.rooms = roomsdata;
        console.log(this.rooms);
      },
      error => {
        console.log(error);
      }
    );
  }
  getHotel(id: any): void {
    this.hDataService.getHotelById(id)
      .subscribe(
        data => {
          this.hotel = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  public moveToStructure(): void {
    this.descriptionSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }
  public moveToRooms(): void {
      this.roomsSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }
  public moveToReviews(): void {
      this.reviewsSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }
  public bookHotelGoToCheckout(roomId:number, roomPrice: number){
    console.log(this.hDataService.datesFormData.getValue());
    const bookingData = {
      username: this.username,
      roomId: roomId,
      hotelId: this.hotel.id,
      checkinDate: this.datepipe.transform(this.fechaInicio, 'yyyy-MM-dd'),
      checkoutDate: this.datepipe.transform(this.fechaFin, 'yyyy-MM-dd'),
      breakfastIncluded: true,
      price: roomPrice
    };
    if(this.isLoggedIn == true){
    this.hDataService.postBooking(bookingData)
      .subscribe(
        response => {
          // console.log(response);
          
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
      }else{
        alert("you need to be logged in to book a hotel");
        throw new Error("you need to be logged in to book a hotel");
      }
  }
}
