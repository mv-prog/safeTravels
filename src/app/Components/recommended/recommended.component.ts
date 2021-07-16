import { Component, OnInit } from '@angular/core';
import { HdataService } from 'src/app/hdata.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  dataList: any = [];
  constructor(private hdataservice: HdataService){}
  ngOnInit(): void {
    this.hdataservice.getAllHotels().subscribe(response => {
      this.dataList = response;
    });
  }
  // tslint:disable-next-line: typedef
  trackByfn(index, item) {
    return item.uniqueValue;
  }
}
