import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

  public email: string;
  public passwd: string;
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: typedef
  authenticationService(email: string, passwd: string) {
    return this.http.get(`http://localhost:8080/api/v1/basicauth`,
      { headers: { authorization: this.createBasicAuthToken(email, passwd) } }).pipe(map((res) => {
        this.email = email;
        this.passwd = passwd;
        this.registerSuccessfulLogin(email, passwd);
      }));
  }

  createBasicAuthToken(email: string, passwd: string): string {
    return 'Basic ' + window.btoa(email + ':' + passwd);
  }

  registerSuccessfulLogin(email, passwd): void {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, email);
  }

  logout(): void {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.email = null;
    this.passwd = null;
  }
  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) { return false; }
    return true;
  }

  getLoggedInemail(): string {
    const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) { return ''; }
    return user;
  }
}
