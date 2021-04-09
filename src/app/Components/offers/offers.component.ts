import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HdataService } from 'src/app/hdata.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  dataList: any = [];
  // constructor(private hdataservice: HdataService){}
  constructor(private http: HttpClient){}
  // ngOnInit(): void {
  //   this.hdataservice.getHData().subscribe(response => {
  //     this.dataList = response;
  //   });
  // }
  ngOnInit(): void {
    const response = this.http.get('http://localhost:8080/hotels');
    // tslint:disable-next-line: deprecation
    response.subscribe((data) => this.dataList = data);
  }
}
