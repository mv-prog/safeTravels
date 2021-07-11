import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  private currencies: string[];
  private selectedCurrency: string;
  private signedToNl: boolean;
  isChecked = true;
  formGroup: FormGroup;
  constructor(formBuilder: FormBuilder, private http: HttpClient) {
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
    const bresponse = this.http.get('http://localhost:8080/bookings');
    // tslint:disable-next-line: deprecation
    bresponse.subscribe((data) => this.bookingList = data);
    console.log(this.bookingList);
  }
}
