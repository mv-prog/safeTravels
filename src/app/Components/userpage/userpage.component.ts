import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss']
})
export class UserpageComponent implements OnInit {
  public numberOfBookings: number;
  public numberOfReviews: number;
  constructor() {
    this.numberOfBookings = 0;
    this.numberOfReviews = 0;
  }
  ngOnInit(): void {
  }

}
