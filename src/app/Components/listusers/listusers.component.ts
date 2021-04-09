import { Component, OnInit } from '@angular/core';
import { HdataService } from 'src/app/hdata.service';
import { User } from './../../models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.scss']
})
export class ListusersComponent implements OnInit {
users: any;
  // users: User[] = [];
  // constructor(private userservice: HdataService) { }
<<<<<<< HEAD
=======
  firstname: string;
>>>>>>> db3cc9b6a445de0bebd68a68930fb7ae41294685
  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    // this.userservice.getUsers().subscribe(
    //   userdata => this.users = userdata
    // );
    const response = this.http.get('http://localhost:8080/users');
    // tslint:disable-next-line: deprecation
    response.subscribe((data) => this.users = data);
<<<<<<< HEAD
=======
  }
  Search(): any{
    this.users = this.users.filter(res => {
      return res.firstname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
    });
>>>>>>> db3cc9b6a445de0bebd68a68930fb7ae41294685
  }
}
