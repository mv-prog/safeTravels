import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDatepicker, DateRange } from '@angular/material/datepicker';
import { EventEmitter } from '@angular/core';
import { HdataService } from 'src/app/hdata.service';
import { DatePipe } from '@angular/common';
import { FormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-mini-hotels-form',
  templateUrl: './mini-hotels-form.component.html',
  styleUrls: ['./mini-hotels-form.component.scss']
})
export class MiniHotelsFormComponent implements OnInit {
  @ViewChild(MatDatepicker) dateRange: MatDatepicker<Date>;
  public options = ['A Coruña', 'Santiago', 'Hostal dos Reis Católicos'];
  @Input() showBrowserBanners;
  @Input() search;
  @Output() dontShowBB = new EventEmitter<void>();
  @Output() sendHotelsData = new EventEmitter<void>();
  private todaysDate = new Date();
  private tomorrowsDate: Date = new Date();
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
form: any = {
  searchInput: null,
  dateRange: {
    startDate: this.todaysDate,
    endDate: this.tomorrowsDate
  },
  adults: 2,
  children: 0,
  rooms: 1
};
searchInput: string;
constructor(private hDataService: HdataService, private datepipe: DatePipe, private formBuilder: FormBuilder){
  this.tomorrowsDate.setDate(this.tomorrowsDate.getDate()+1);
  this.form.dateRange.startDate= this.datepipe.transform(this.todaysDate, "dd/mm/yyyy");
  this.form.dateRange.endDate= this.datepipe.transform(this.tomorrowsDate, "dd/mm/yyyy");
}

/**
 * dontShowbb
 * emits a boolean variable, showBrowserBanners, set to false, in order not to show this component in the parent component.
 */
dontShowbb(): any{
  this.showBrowserBanners = false;
  this.dontShowBB.emit(this.showBrowserBanners);
}
onSubmit(): void {
  this.hDataService.editSearchInputData(this.form.searchInput);
  // window.location.reload();
  this.updateSearchInput();
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
