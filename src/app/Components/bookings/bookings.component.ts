import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/token-storage.service';
import { UserService } from './../../user.service';
import { HdataService } from './../../hdata.service';
import { Booking } from './../../models/booking.model';
import { Hotel } from './../../models/hotel.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  booking: Booking;
  public numberOfBookings: number;
  public numberOfReviews: number;
  // public bookingList: any;
  public bookingId: number;
  public bookingCompleted: boolean;
  content?: string;
  private currencies: string[];
  private selectedCurrency: string;
  private signedToNl: boolean;
  private hotel: Hotel;
  isChecked = true;
  formGroup: FormGroup;
  currentUser: any;
  bookingsByUserUrl: string;
  bookingsByUser: any;
  bookings?: Booking[];
  username: string;
  email: string;
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard = false;
  private roles: string[] = [];
  today: Date;
  constructor(formBuilder: FormBuilder, private http: HttpClient, private token: TokenStorageService,
    private userService: UserService, private hDataService: HdataService) {
    this.numberOfReviews = 0;
    this.bookingCompleted = true;
    this.currencies = ['€ Euro', 'KRW Korean Won', '£ Pound Sterling', 'USD American Dollar', 'JPY Japanese Yen', 'CNY Chinese Yuan'];
    this.selectedCurrency = '€ Euro';
    this.signedToNl = true;
    this.formGroup = formBuilder.group({
      enableWifi: '',
      acceptTerms: ['', Validators.requiredTrue]
    });
    this.today = new Date();
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken();
    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.currentUser = this.token.getUser();
      this.username = user.username;
      this.email = user.email;
      this.bookingsByUserUrl = 'http://localhost:8080/bookings/' + this.currentUser.username;
      this.getBookingsByUsername(this.username);
      // console.log("user", user);
      // console.log("this.username", this.username);
      // console.log("this.email", this.email);
    }

  }
  getHotelFromBookingList(bookings: any): void {
    // console.log(bookings);
    bookings.forEach(booking => {
      this.hDataService.getHotelById(booking.hotelId).
      subscribe(
        hoteldata => {
          // le metemos este campo en el modelo y 
          // lo igualamos al que ya exite en el hotel para que sea fácilmente accesible
          booking.hotelName = hoteldata.name;
          // console.log("booking.price", booking.price);
        },
        error => {
          console.log(error);
        }
      );
    });
  }
  isBookingCompleted(checkoutDate: Date): boolean {
    let completed = true;
    if (BookingsComponent.compareDate(checkoutDate, new Date()) != 0) {
      completed = false;
    }
    return completed;
  }
  getBookingsByUsername(username: string): void {
    this.hDataService.getBookingsByUsername(username).subscribe(
      bookings => {
        this.bookings = bookings;
        // console.log("this.bookings", this.bookings);
        // así tiene que hacer menos trabajo que con el this. y hay qeu llamarlo aquí pq como angular es asíncrono si lo ponemos en el ngOnInit igual aún no ha acabad de¡ cargar los bookings de la llamada del anterior método 
        this.getHotelFromBookingList(bookings);
        this.numberOfBookings = this.bookings.length;
        // console.log("numberOfBookings", this.numberOfBookings);
      },
      error => {
        console.log(error);
      }
    );
  }

  // getHotelsByBookingList(bookings: Booking[]){
  //   bookings.forEach(booking => {
  //     let hotel = this.getHotelById(booking.hotelId);
  //   });
  // }

  getBookingById(id: any): void {
    this.hDataService.getBookingById(id).
      subscribe(
        booking => {
          this.booking = booking;
          // console.log(this.booking);
        },
        error => {
          console.log(error);
        }
      );
  }
  getHotelById(id: any): void {
    this.hDataService.getHotelByBookingsHotelId(id).
      subscribe(
        hoteldata => {
          this.hotel = hoteldata;
          // console.log(this.hotel);
          // console.log(hoteldata);
        },
        error => {
          console.log(error);
        }
      );
  }

  public static compareDate(date1: Date, date2: Date): number {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    if (d1.getTime() === d2.getTime()) return 0;

    else if (d1 > d2) return 1;

    else if (d1 < d2) return -1;
  }
}
