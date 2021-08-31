import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { DateRange, MatDatepicker } from '@angular/material/datepicker';
import { HdataService } from 'src/app/hdata.service';
import { DatePipe } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, filter, startWith, map } from 'rxjs/operators';
import { MatAutocomplete } from '@angular/material/autocomplete';


@Component({
  selector: 'app-hotelsform',
  templateUrl: './hotelsform.component.html',
  styleUrls: ['./hotelsform.component.scss']
})
export class HotelsformComponent implements OnInit {
  // @ViewChild(MatDatepicker, {static: false}) dateRange: MatDatepicker<Date>;
  public options = ['A Coruña', 'A Hermida', 'Hostal dos Reis Católicos', 'Sober'];
  @Input() showBrowserBanners;
  // @Input() search;
  @Output() dontShowBB = new EventEmitter<void>();
  @Output() sendHotelsData = new EventEmitter<void>();
  private todaysDate = new Date();

  tomorrowsDateNumber: number = this.todaysDate.getDate() + 1;
  private tomorrowsDate: Date = new Date();
  hotelList$: Observable<string[]>;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  range = new FormGroup({
    searchInput: new FormControl(''),
    fechaInicio: new FormControl(this.todaysDate),
    fechaFin: new FormControl(this.tomorrowsDate)
  });
  form: any = {
    searchInput: null,
    // name: null,
    dateRange: {
      startDate: this.todaysDate,
      endDate: this.tomorrowsDate
    },
    adultsNumber: 2,
    childrenNumber: 0,
    roomsNumber: 1
  };

  searchInput: string;
  dateRange: Date[];

  constructor(private hDataService: HdataService, private datepipe: DatePipe, private formBuilder: FormBuilder) {
    this.tomorrowsDate.setDate(this.tomorrowsDate.getDate() + 1);
    // this.form.dateRange.startDate = this.datepipe.transform(this.todaysDate, "dd/mm/yyyy");
    // this.form.dateRange.endDate = this.datepipe.transform(this.tomorrowsDate, "dd/mm/yyyy");
    // this.range.get('fechaInicio').setValue(this.datepipe.transform(this.todaysDate, "dd/mm/yyyy"));
    // this.range.get('fechaFin').setValue(this.datepipe.transform(this.tomorrowsDate, "dd/mm/yyyy"));

  }

  /**
   * dontShowbb
   * emits a boolean variable, showBrowserBanners, set to false, in order not to show this component in the parent component.
   */
  dontShowbb(): any {
    this.showBrowserBanners = false;
    this.dontShowBB.emit(this.showBrowserBanners);
  }


  ngOnInit(): void {
    // subscribo os datos a unha vble á que vou chamar por doquier
    this.hDataService.searchInputToObservable.subscribe(searchinput => this.searchInput = searchinput);
    // this.hDataService.datesToObservable.subscribe(dateRange => this.dateRange = dateRange);
    //observable que emite cambios en el valor de la vble
    this.range.get('fechaInicio').valueChanges
      .subscribe(fechaInicio => this.hDataService.editDatesData([fechaInicio, this.range.get('fechaFin').value]));
    //aquí la segunda vble es la que cambia, la primera es estática
    this.range.get('fechaFin').valueChanges
      .subscribe(fechaFin => this.hDataService.editDatesData([this.range.get('fechaInicio').value, fechaFin]));
  }

  /**
   * updateSearchInput
   * actualizo a variable creada cos datos do meu ngModel.
   * */
  updateSearchInput() {
    this.hDataService.editSearchInputData(this.range.get('searchInput').value);
    this.hDataService.editDatesData([this.range.get('fechaInicio').value, this.range.get('fechaFin').value]);
  }

}
