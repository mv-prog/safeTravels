import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  private user:any;
  constructor(private dialog: MatDialog,private http:HttpClient,private router:Router) { 
    this.user={
      'email':'',
      'password':''
    };

  }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    userpasswd: new FormControl('', Validators.required)
  });
  openSignUp(){
    const matDialogConfig= new MatDialogConfig();
    matDialogConfig.autoFocus = true;
    // this.dialog.close(LoginComponent, matDialogConfig);
    this.dialog.open(SignupComponent, matDialogConfig);
  }
  
  publiclogin(){
    if(this.user.email&& this.user.password) {
      let headers = new HttpHeaders({ 'content-type': 'application/json' });
      this.http.post('http://localhost:4200/login',JSON.stringify(this.user),{headers:headers})
        .subscribe(result=>
          this.router.navigate(['/blogs'],{'queryParams':result})
        );
    }
  }

  ngOnInit(): void {
  }

}
