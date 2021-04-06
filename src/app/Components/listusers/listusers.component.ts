import { Component, OnInit } from '@angular/core';
import { HdataService } from 'src/app/hdata.service';
import { User } from './../../models/user';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.scss']
})
export class ListusersComponent implements OnInit {

  users: User[] = [];
  constructor(private userservice: HdataService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    // this.userservice.getUsers().subscribe(
    //   userdata => this.users = userdata
    // );
  }

}
