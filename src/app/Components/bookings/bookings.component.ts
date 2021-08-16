import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/token-storage.service';
import { UserService } from './../../user.service';
import { HdataService } from './../../hdata.service';
import { Booking } from './../../models/booking.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  public numberOfBookings: number;
  public numberOfReviews: number;
  public bookingList: any;
  public bookingId: number;
  public bookingCompleted: boolean;
  content?: string;
  private currencies: string[];
  private selectedCurrency: string;
  private signedToNl: boolean;
  isChecked = true;
  formGroup: FormGroup;
  currentUser: any;
  bookingsByUserUrl: string;
  bookingsByUser: any;
  bookings?: Booking[];
  username: string;
  constructor(formBuilder: FormBuilder, private http: HttpClient, private token: TokenStorageService, 
    private userService: UserService, private hDataService: HdataService) {
    this.numberOfBookings = 1;
    this.numberOfReviews = 0;
    this.bookingCompleted = true;
    this.currencies = ['€ Euro', 'KRW Korean Won', '£ Pound Sterling', 'USD American Dollar', 'JPY Japanese Yen', 'CNY Chinese Yuan'];
    this.selectedCurrency = '€ Euro';
    this.signedToNl = true;
    this.formGroup = formBuilder.group({
      enableWifi: '',
      acceptTerms: ['', Validators.requiredTrue]
    });
  }
  BookingSearch(): any{
    this.bookingList = this.bookingList.filter(res => {
      return res.id;
    });
  }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    // this.username = this.currentUser.get
    const bresponse = this.http.get('http://localhost:8080/bookings');
    this.bookingsByUserUrl='http://localhost:8080/bookings/' + this.currentUser.email;
    this.bookingsByUser = this.http.get(this.bookingsByUserUrl);
    bresponse.subscribe((data) => this.bookingList = data);
    console.log(this.bookingList);
    this.getBookingsById(this.currentUser.email)
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  getBookingsById(id: any): void {
    this.hDataService.getBookingsById(id).
    subscribe(
      bookingssdata => {
        this.bookings = bookingssdata;
        console.log(this.bookings);
      },
      error => {
        console.log(error);
      }
    );
  }
}
