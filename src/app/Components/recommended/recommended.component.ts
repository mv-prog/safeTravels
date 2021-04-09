import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HdataService } from 'src/app/hdata.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  dataList: any = [];
  // constructor(private hdataservice: HdataService){}
  constructor(private http:HttpClient){}
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
