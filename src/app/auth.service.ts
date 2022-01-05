import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment.prod';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  baseUrl = environment.baseUrl;
  AUTH_API = this.baseUrl+'/api/auth/';
  login(username: string, passwd: string): Observable<any> {
    return this.http.post(this.AUTH_API + 'login', {
      username,
      passwd
    }, httpOptions);
  }

  signup(username: string, email: string, passwd: string): Observable<any> {
    return this.http.post(this.AUTH_API + 'signup', {
      username,
      email,
      passwd
    }, httpOptions);
  }
}
