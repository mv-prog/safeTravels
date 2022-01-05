import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { Hotel } from './models/hotel.model';
import { Room } from './models/room.model';
import { BehaviorSubject } from 'rxjs';
import { Booking } from './models/booking.model';
import { map } from 'rxjs/operators';
import { UrlService } from 'src/config/myurls';
import { environment } from './../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HdataService {
  user: User[];
  //i was using Santiago before, but then I couln't show all hotels because searchInput wasn't undefined. 
  private searchInputFormData = new BehaviorSubject<string>('');
  searchInputToObservable = this.searchInputFormData.asObservable();
  public datesFormData = new BehaviorSubject<Date[]>([]);
  datesToObservable = this.datesFormData.asObservable();

  private baseHotelsUrl = environment.baseUrl+'/hotels';
  private baseHotelUrl = environment.baseUrl+'/hotel';
  private baseUsersUrl = environment.baseUrl+'/users';
  private baseBookingsUrl = environment.baseUrl+'/bookings';
  private baseRoomsUrl = environment.baseUrl+'/rooms';
  constructor(private httpClient: HttpClient) { }

  // Hotels methods
  getAllHotels(): Observable<any> {
    return this.httpClient.get<Hotel[]>(this.baseHotelsUrl);
  }
  getHotelById(id: any): Observable<any> {
    return this.httpClient.get(`${this.baseHotelUrl}/${id}`);
  }
  getHotelByName(name: any): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(`${environment.baseUrl}/hotelByName/${name}`);
  }
  getHotelsByName(name: any): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(`${this.baseHotelsUrl}?name=${name}`);
  }
  getHotelsByProvince(province: any): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(`${environment.baseUrl}/hotelsByProvince/${province}`);
    // return this.httpClient.get<Hotel[]>(`${this.baseHotelsUrl}?province=${province}`);
  }
  getHotelsByCity(city: any): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(`${environment.baseUrl}/hotelsByCity/${city}`);
  }
  updateHotel(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.baseHotelUrl}/${id}`, data);
  }
  deleteHotel(id): Observable<any> {
    return this.httpClient.delete(`${this.baseHotelsUrl}/${id}`);
  }
  getByName(name: string): Observable<string[]> {
    return this.httpClient.get<Hotel[]>(`${environment.baseUrl}/hotelByName/${name}`)
      .pipe(map(hotelList => hotelList.map(({ name }) => name)));
  }

  

  /** the hotel-data-related searches */
  editSearchInputData(newSearchInput){
    this.searchInputFormData.next(newSearchInput);
  }
  editDatesData(newDates){
    console.log(newDates);
    this.datesFormData.next(newDates);
  }


  // rooms methods
  getAllRoomsByHotel(id: any): Observable<Room[]> {
    return this.httpClient.get<Room[]>(UrlService+`hotel/${id}/rooms`);
  }
  getAllRooms(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(this.baseRoomsUrl);
  }

  // Bookings methods
  getAllBookings(): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(this.baseBookingsUrl);
  }
  getBookingsByUsername(username: string): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(`${this.baseBookingsUrl}/${username}`);
   }
   getBookingById(id: any): Observable<Booking> {
    return this.httpClient.get<Booking>(UrlService+`bookingById/${id}`);
   }
   getHotelByBookingsHotelId(id: any):Observable<Hotel> {
     return this.httpClient.get<Hotel>(UrlService+`hotelByHotelId/${id}`);
   }
   postBooking(booking: Booking): Observable<Booking>{
     return this.httpClient.post<Booking>(UrlService+`addBooking`, booking);
   }
   updateBooking(booking: Booking): Observable<Booking>{
    return this.httpClient.post<Booking>(UrlService+`updateBooking`, booking);
  }

     // my previous json server data, stored in db.json
  // getHData(): any {
  // return this.httpClient.get('http://localhost:3000/hotels'); mock json server
  // }
}



