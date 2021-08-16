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

@Injectable({
  providedIn: 'root'
})
export class HdataService {
  user: User[];
  private searchInputFormData = new BehaviorSubject<string>('Santiago');
  searchInputToObservable = this.searchInputFormData.asObservable();

  private baseHotelsUrl = 'http://localhost:8080/hotels';
  private baseHotelUrl = 'http://localhost:8080/hotel';
  private baseUsersUrl = 'http://localhost:8080/users';
  private baseBookingsUrl = 'http://localhost:8080/bookings';
  private baseRoomsUrl = 'http://localhost:8080/rooms';
  constructor(private httpClient: HttpClient) { }

  // Hotels methods
  getAllHotels(): Observable<any> {
    return this.httpClient.get<Hotel[]>(this.baseHotelsUrl);
  }
  getHotelById(id: any): Observable<any> {
    return this.httpClient.get(`${this.baseHotelUrl}/${id}`);
  }
  getHotelByName(name: any): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(`http://localhost:8080/hotelByName/${name}`);
  }
  getHotelsByName(name: any): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(`${this.baseHotelsUrl}?name=${name}`);
  }
  getHotelsByProvince(province: any): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(`http:localhost:8080/hotelsByProvince/${province}`);
    // return this.httpClient.get<Hotel[]>(`${this.baseHotelsUrl}?province=${province}`);
  }
  getHotelsByCity(city: any): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(`http:localhost:8080/hotelsByCity/${city}`);
  }
  updateHotel(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.baseHotelUrl}/${id}`, data);
  }
  deleteHotel(id): Observable<any> {
    return this.httpClient.delete(`${this.baseHotelsUrl}/${id}`);
  }
  getByName(name: string): Observable<string[]> {
    return this.httpClient.get<Hotel[]>(`http://localhost:8080/hotelByName/${name}`)
      .pipe(map(hotelList => hotelList.map(({ name }) => name)));
  }

  

  /** the hotel-data-related searches */
  editSearchInputData(newSearchInput){
    this.searchInputFormData.next(newSearchInput);
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
  getBookingsById(id: any): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(`${this.baseBookingsUrl}/${id}`);
   }

     // my previous json server data, stored in db.json
  // getHData(): any {
  // return this.httpClient.get('http://localhost:3000/hotels'); mock json server
  // }
}



