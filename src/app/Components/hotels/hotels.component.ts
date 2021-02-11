import { Component, OnInit } from '@angular/core';
import { HdataService } from 'src/app/hdata.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  dataList: any = [];
  constructor(private hdataservice: HdataService){}
  ngOnInit(): void {
    this.hdataservice.getHData().subscribe(response => {
      this.dataList = response;
    });
  }

}
