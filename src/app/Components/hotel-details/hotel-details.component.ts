import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {

  public hotelId;
  constructor(private routeParams: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routeParams.params.subscribe(params => {
      // tslint:disable-next-line: radix
      this.hotelId = parseInt(params.id);
    });
    // Some logic to get the details of this id
  }

}
