import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from './../signup/signup.component';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private dialog: MatDialog) { }
  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  public openLogIn() {
    const matDialogConfig = new MatDialogConfig();
    // matDialogConfig.disableClose=true;
    matDialogConfig.autoFocus = true;
    this.dialog.open(LoginComponent, matDialogConfig);

  }
  // tslint:disable-next-line: typedef
  openSignUp(){
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.autoFocus = true;
    this.dialog.open(SignupComponent, matDialogConfig);
  }
  // tslint:disable-next-line: typedef
public pecharLinks(e: any){
  e.hide();
}
}
