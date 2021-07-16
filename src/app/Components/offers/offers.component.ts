import { Component, OnInit } from '@angular/core';
import { HdataService } from 'src/app/hdata.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  dataList: any = [];
  constructor(private hdataservice: HdataService){}
  ngOnInit(): void {
    this.hdataservice.getAllHotels().subscribe(response => {
      this.dataList = response;
    });
  }

}
