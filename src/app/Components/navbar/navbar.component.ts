import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from './../signup/signup.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';;
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/token-storage.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() showBrowserBanners;
  @Output() showBB = new EventEmitter<void>();
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  constructor(private dialog: MatDialog, private route: ActivatedRoute,
              private router: Router,
              private tokenStorageService: TokenStorageService) { }
  
  public showbb(): void {
    this.showBrowserBanners = true;
    this.showBB.emit(this.showBrowserBanners);
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  
/*methods to open the window dialogs for the signup and login components*/
  public openLogIn(): void {
    const matDialogConfig = new MatDialogConfig();
    // matDialogConfig.disableClose=true;
    matDialogConfig.autoFocus = true;
    this.dialog.open(LoginComponent, matDialogConfig);

  }

  openSignUp(): void {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.autoFocus = true;
    this.dialog.open(SignupComponent, matDialogConfig);
  }

}
