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
  @ViewChild(MatDatepicker, {static: false}) dateRange: MatDatepicker<Date>;
  public options = ['A Coruña', 'Santiago', 'Hostal dos Reis Católicos', 'A Coruña2'];
  @Input() showBrowserBanners;
  @Input() search;
  @Output() dontShowBB = new EventEmitter<void>();
  @Output() sendHotelsData = new EventEmitter<void>();
  private todaysDate = new Date();
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  tomorrowsDateNumber: number = this.todaysDate.getDate() + 1;
  private tomorrowsDate: Date = new Date(this.tomorrowsDateNumber);
  hotelList$: Observable<string[]>;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  form: any = {
    searchInput: null,
    name: null,
    dateRange: {
      startDate: this.todaysDate,
      endDate: this.tomorrowsDate
    },
    adultsNumber: 2,
    childrenNumber: 0,
    roomsNumber: 1
  };

  searchInput: string;

  constructor(private hDataService: HdataService, private datepipe: DatePipe, private formBuilder: FormBuilder) {
    // this.form.dateRange.startDate = this.datepipe.transform(this.todaysDate, "dd/mm/yyyy");
    // this.form.dateRange.endDate = this.datepipe.transform(this.tomorrowsDate, "dd/mm/yyyy");

  }

  /**
   * dontShowbb
   * emits a boolean variable, showBrowserBanners, set to false, in order not to show this component in the parent component.
   */
  dontShowbb(): any {
    this.showBrowserBanners = false;
    this.dontShowBB.emit(this.showBrowserBanners);
  }

  /**
   * sendData
   * emits/outputs the search input gotten in the hotels form.
   */
  sendData(): any {
    this.sendHotelsData.emit(this.search);
  }
  ngOnInit(): void {
    // subscribo os datos a unha varable que creo e que é a que vou chamar por doquier
    this.hDataService.searchInputToObservable.subscribe(searchinput => this.searchInput = searchinput);
    // this.hotelList$ = this.formHotel.get('name').valueChanges.pipe(
    //   distinctUntilChanged(),
    //   debounceTime(1000),
    //   filter((name) => !!name),
    //   // switchMap((name: any) => this.hDataService.getByName(name))
    // ); 
    // this.hotelList$.subscribe((busqueda: any) => {
    //   console.log('busqueda', busqueda);
    // });
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.form.searchInput = value;
    this.form.name = value;
    this.updateSearchInput();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));

  }
  /**
   * updateSearchInput
   * actualizo a variable creada cos datos do meu ngModel.
   * */
  updateSearchInput() {
    this.hDataService.editSearchInputData(this.form.searchInput);
  }

}
