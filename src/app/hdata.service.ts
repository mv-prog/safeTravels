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
  constructor(private httpClient: HttpClient) { }
  private getUrl = 'http://localhost:8080/users';
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
    return this.httpClient.get('http://localhost:3000/hotels');
  }
}
