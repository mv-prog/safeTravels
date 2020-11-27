import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private dialogRef: MatDialogRef<LoginComponent>;
  onClickedOutside(e: Event) {
    this.dialogRef.close();
    console.log('Clicked outside:', e);
  }
  constructor(private dialog: MatDialog) { }
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    userpasswd: new FormControl('', Validators.required)
  });
  openSignUp(){
    const matDialogConfig= new MatDialogConfig();
    matDialogConfig.autoFocus = true;
    this.dialog.open(SignupComponent, matDialogConfig);
  }
  
  ngOnInit(): void {
  }

}
