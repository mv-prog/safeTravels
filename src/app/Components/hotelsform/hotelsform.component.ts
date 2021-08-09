import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { DateRange, MatDatepicker } from '@angular/material/datepicker';
import { HdataService } from 'src/app/hdata.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-hotelsform',
  templateUrl: './hotelsform.component.html',
  styleUrls: ['./hotelsform.component.scss']
})
export class HotelsformComponent implements OnInit {
  @ViewChild(MatDatepicker) rangePicker: MatDatepicker<Date>;
  public options = ['A Coruña', 'Santiago', 'Hostal dos Reis Católicos'];
  @Input() showBrowserBanners;
  @Input() search;
  @Output() dontShowBB = new EventEmitter<void>();
  @Output() sendHotelsData = new EventEmitter<void>();
  private todaysDate = new Date();
  private tomorrowsDateNumber: number = this.todaysDate.getDate()+1;
  private tomorrowsDate: Date = new Date(this.tomorrowsDateNumber);
form: any = {
  searchInput: null,
  range: {
    startDate: this.todaysDate,
    endDate: this.tomorrowsDate
  },
  adultsNumber: 2,
  childrenNumber: 0,
  roomsNumber: 1
};
searchInput: string;
constructor(private hDataService: HdataService, private datepipe: DatePipe){
  this.form.range.startDate= this.datepipe.transform(this.todaysDate, "dd/mm/yyyy"),
  this.form.range.endDate= this.datepipe.transform(this.tomorrowsDate, "dd/mm/yyyy")
}

/**
 * dontShowbb
 * emits a boolean variable, showBrowserBanners, set to false, in order not to show this component in the parent component.
 */
dontShowbb(): any{
  this.showBrowserBanners = false;
  this.dontShowBB.emit(this.showBrowserBanners);
}

/**
 * sendData
 * emits/outputs the search input gotten in the hotels form.
 */
sendData(): any{
  this.sendHotelsData.emit(this.search);
}
ngOnInit(): void {
  // subscribo os datos a unha varable que creo e que é a que vou chamar por doquier
  this.hDataService.searchInputToObservable.subscribe(searchinput => this.searchInput = searchinput);
}
/**
 * updateSearchInput
 * actualizo a variable creada cos datos do meu ngModel.
 * */
updateSearchInput(){
  this.hDataService.editSearchInputData(this.form.searchInput);
}
}
