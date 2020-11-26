import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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
  constructor() { }
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    userpasswd: new FormControl('', Validators.required)
  });
  
  ngOnInit(): void {
  }

}
