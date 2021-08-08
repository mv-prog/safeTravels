import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute} from '@angular/router';
import { TokenStorageService } from 'src/app/token-storage.service';
import { SignupComponent } from '../signup/signup.component';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    passwd: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private dialogRef: MatDialogRef<LoginComponent>;

  constructor(private dialog: MatDialog, private route: ActivatedRoute,
              private authService: AuthService,
              private tokenStorage: TokenStorageService) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(): void {
    const { username, passwd } = this.form;

    this.authService.login(username, passwd).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
 /** Method to open the Login Component */
  openSignUp(): void {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.autoFocus = true;
    // this.dialog.close(LoginComponent, matDialogConfig);
    this.dialog.open(SignupComponent, matDialogConfig);
  }
  /** Method to close this component*/
  onClickedOutside(e: Event): void {
    this.dialogRef.close();
    console.log('Clicked outside:', e);
  }
}
