import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './models/user';
import { Hotel } from './models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HdataService {
  user: User[];
  private baseHotelsUrl = 'http://localhost:8080/hotels';
  private baseHotelUrl = 'http://localhost:8080/hotel';
  constructor(private httpClient: HttpClient) { }
  private baseUsersUrl = 'http://localhost:8080/users';
  private baseBookingsUrls = 'http://localhost:8080/bookings';

  // my previous json server data, stored in db.json
  // getHData(): any {
    // return this.httpClient.get('http://localhost:3000/hotels'); mock json server
  // }

  getBookingsData(): any {
    return this.httpClient.get(this.baseBookingsUrls);
  }

  getAllHotels(): Observable<any>{
    return this.httpClient.get<Hotel[]>(this.baseHotelsUrl);
  }
  getHotelById(id: any): Observable<any>{
    return this.httpClient.get(`${this.baseHotelUrl}/${id}`);
  }
  getHotelByName(name: any): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(`http://localhost:8080/hotelByName/${name}`);
  }
createUsr(data): Observable<any>{
  return this.httpClient.post(this.baseUsersUrl, data);
}

updateHotel(id: any, data: any): Observable<any> {
  return this.httpClient.put(`${this.baseHotelUrl}/${id}`, data);
}
  deleteHotel(id): Observable<any>{
  return this.httpClient.delete(`${this.baseHotelsUrl}/${id}`);
}

}

