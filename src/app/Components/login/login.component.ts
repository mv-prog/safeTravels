import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
// export class LoginComponent implements OnInit {
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    passwd: new FormControl('', Validators.required)
  });
  username: string;
  passwd: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  successfulLogin = false;
  private dialogRef: MatDialogRef<LoginComponent>;
  onClickedOutside(e: Event): void {
    this.dialogRef.close();
    console.log('Clicked outside:', e);
  }
  constructor(private dialog: MatDialog, private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthService) { }
  openSignUp(): void {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.autoFocus = true;
    // this.dialog.close(LoginComponent, matDialogConfig);
    this.dialog.open(SignupComponent, matDialogConfig);
  }
  // ngOnInit(): void {
  // }
  handleLogin(): void {
    this.authenticationService.authenticationService(this.username, this.passwd).subscribe((result) => {
      this.invalidLogin = false;
      this.successfulLogin = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/hello-world']);
    }, () => {
      this.invalidLogin = true;
      this.successfulLogin = false;
    });
  }
}
