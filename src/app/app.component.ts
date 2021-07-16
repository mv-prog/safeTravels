import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from './Components/login/login.component';
import { HdataService } from './hdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'safeTravels';
  private loggedin: boolean;
  dataList: any = [];
  constructor(private hdataservice: HdataService){}
  // tslint:disable-next-line: typedef
  ngOnInit(){}
}
