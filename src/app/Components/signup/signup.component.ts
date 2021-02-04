import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  private newUser:any;
  constructor(private http:HttpClient, private router:Router) { 
    this.newUser={
      'email':'',
      'pass':'',
      'name':'',
      'lastname':''
    };
  }

  signupForm = new FormGroup({
    email: new FormControl('', Validators.required),
    userpasswd: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required), 
    lastName: new FormControl('', Validators.required),
  });
  
  public register (){
    if(this.newUser.email && this.newUser.pass){
      let header = new HttpHeaders({'content-type':'application/json'});
        this.http.post('http://localhost:4200/', JSON.stringify(this.newUser), {headers:header})
        .subscribe(()=>
        this.router.navigate(['/login']));
        
    }
  }
  
  ngOnInit(): void {
  }

}
