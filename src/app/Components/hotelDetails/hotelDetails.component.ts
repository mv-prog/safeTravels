import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Hotel } from '../../models/hotel.model';
import { HdataService } from 'src/app/hdata.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotelDetails.component.html',
  styleUrls: ['./hotelDetails.component.scss']
})
export class HotelDetailsComponent implements OnInit {
  id: number;
  hotel$: Observable<Hotel[]>;
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

  constructor(
    private hDataService: HdataService,
    public route: ActivatedRoute,
    private router: Router) { }

  // ngOnInit(): void {
  //   this.routeParams.params.subscribe(params => {
  //     // tslint:disable-next-line: radix
  //     this.hotelId = parseInt(params.id);
  //   });
  ngOnInit(): void {
    this.description = '';
    // with the snapshot one can get a parameter, but in order to get the whole thing and get changes done inside the component,
    // not just the url, you need to subscribe.
    // this.id = this.route.snapshot.paramMap.get('id');
    // this.hotel = this.hDataService.getHotelById(this.id); --> this is not working
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
    });
    this.getHotel(this.route.snapshot.paramMap.get('id'));
    this.hotel$ = this.hDataService.getHotelById(this.hotelId);
    // this.router.events.subscribe(() => {
    //   this.getHotel(this.hotelId);
    // });
    // this.route.params.subscribe(params => {
    //   // tslint:disable-next-line: radix
    //   this.hotelId = parseInt(params.hotelId);
    //   console.log('hotelId:' + this.hotelId);
    // });
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

}
