import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from './../signup/signup.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthService } from './../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() showBrowserBanners;
  @Output() showBB = new EventEmitter<void>();
  isLoggedIn = false;
  constructor(private dialog: MatDialog, private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthService) { }
  public showbb(): void {
    this.showBrowserBanners = true;
    this.showBB.emit(this.showBrowserBanners);
  }
  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  }

  handleLogout(): void{
    this.authenticationService.logout();
  }
  // tslint:disable-next-line: typedef
  public openLogIn() {
    const matDialogConfig = new MatDialogConfig();
    // matDialogConfig.disableClose=true;
    matDialogConfig.autoFocus = true;
    this.dialog.open(LoginComponent, matDialogConfig);

  }
  // tslint:disable-next-line: typedef
  openSignUp() {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.autoFocus = true;
    this.dialog.open(SignupComponent, matDialogConfig);
  }

}
