import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from 'src/config/myurls';
import { environment } from './../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(this.API_URL + 'hotels', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'user/', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'admin', { responseType: 'text' });
  }

  updateUser(data:any):Observable<any>{
    return this.http.put(UrlService+`updateUser`, data);
  }
}
