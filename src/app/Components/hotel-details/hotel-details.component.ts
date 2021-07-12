import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from './../../models/hotel.model';
import { HdataService } from 'src/app/hdata.service';
import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {
  hotel$: Observable<Hotel[]>;
  curHotel: Hotel = {
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
  public hotel;

  constructor(
    private hDataService: HdataService,
    public route: ActivatedRoute,
    private router: Router) { }
    // tslint:disable-next-line: typedef
    goToHotel(hotel: Hotel) {
      const hotelId = hotel ? hotel.id : null;
      // Pass along the hotel id if available
      // so that the HeroList component can select that item.
      this.router.navigate(['/hotels', { id: hotelId }]);
    }
  // ngOnInit(): void {
  //   this.routeParams.params.subscribe(params => {
  //     // tslint:disable-next-line: radix
  //     this.hotelId = parseInt(params.id);
  //   });
  ngOnInit(): void {
    this.description = '';
    const heroId = this.route.snapshot.paramMap.get('id');
    this.hotel$ = this.hDataService.getHotelById(heroId);
    // this.getHotel(this.route.snapshot.params.get('id'));
    // console.log(this.getHotel(this.route.snapshot.params.id));
    // console.log(this.getHotel(this.route.snapshot.params.get('id')));
    // this.route.params.subscribe(params => {
    //   // tslint:disable-next-line: radix
    //   this.hotelId = parseInt(params.hotelId);
    //   console.log('hotelId:' + this.hotelId);
    // });
  }

  getHotel(id: number): void {
    this.hDataService.getHotelById(id)
      .subscribe(
        data => {
          this.curHotel = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
