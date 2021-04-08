import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hotelsform',
  templateUrl: './hotelsform.component.html',
  styleUrls: ['./hotelsform.component.scss']
})
export class HotelsformComponent implements OnInit {
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  public options = ['Mallorca', 'Santiago', 'Ca Sa Padrina d\'Artà'];
  @Input() showBrowserBanners;
  @Input() search;
  public name: string;
  @Output() dontShowBB = new EventEmitter<void>();
  @Output() sendHotelsData = new EventEmitter<void>();
  public dataList: any;
  constructor(private http: HttpClient){}
  // tslint:disable-next-line: typedef
  dontShowbb(){
    this.showBrowserBanners = false;
    this.dontShowBB.emit(this.showBrowserBanners);
  }

  // tslint:disable-next-line: typedef
  sendData(){
    this.sendHotelsData.emit(this.search);
  }
  ngOnInit(): void {
    const response = this.http.get('http://localhost:8080/hotels');
    // tslint:disable-next-line: deprecation
    response.subscribe((data) => this.dataList = data);
  }
  Search(): any{
    this.dataList = this.dataList.filter(res => {
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
}
