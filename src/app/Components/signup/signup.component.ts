import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }
  signupForm = new FormGroup({
    email: new FormControl('', Validators.required),
    userpasswd: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required), 
    lastName: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
  }

}
