import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class HdataService {
  user: User[];
  private baseHotelsUrl = 'http://localhost:8080/hotels';
  constructor(private httpClient: HttpClient) { }
  private baseUsersUrl = 'http://localhost:8080/users';
// tslint:disable-next-line: typedef
// getUsers(){
// return this.httpClient.get<User>;
// }
  // getUsers(): Observable<User[]> {
  //   return this.httpClient.get<User[]>(this.getUrl).pipe(
  //     map(response => response)
  //   );
  // }

  // getHotels(): Observable<Hotel[]> {
  // return this._httpClient.get<Hotel[]>(this.getUrl).pipe(
  //   map(response => response);
  // )}

  // my json server data, stored in db.json
  getHData(): any {
    // return this.httpClient.get('http://localhost:3000/hotels'); mock json server
    return this.httpClient.get(this.baseHotelsUrl);
  }

  getBookingsData(): any {
    return this.httpClient.get('http://localhost:8080/bookings');
  }

  getAllHotels(): Observable<any>{
    return this.httpClient.get(this.baseHotelsUrl);
  }
  getHotelId(): Observable<any>{
    return this.httpClient.get('${this.baseHotelsUrl}/${id}');
  }
createUsr(data): Observable<any>{
  return this.httpClient.post(this.baseUsersUrl, data);
}
  updateHotel(id, data): Observable<any>{
  return this.httpClient.put('${this.baseHotelsUrl}/${id}', data);
}
  deleteHotel(id): Observable<any>{
  return this.httpClient.delete('${this.baseHotelsUrl}/${id}');
}

}

