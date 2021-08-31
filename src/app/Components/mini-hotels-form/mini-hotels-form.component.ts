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
  // @ViewChild(MatDatepicker) dateRange: MatDatepicker<Date>;
  public options = ['A Coruña', 'Cristosende', 'Hostal dos Reis Católicos'];
  @Input() showBrowserBanners;
  @Input() search;
  @Output() dontShowBB = new EventEmitter<void>();
  @Output() sendHotelsData = new EventEmitter<void>();
  private todaysDate = new Date();
  private tomorrowsDate: Date = new Date();
  range = new FormGroup({
    searchInput: new FormControl(''),
    fechaInicio: new FormControl(new Date()),
    fechaFin: new FormControl(new Date())
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
  dateRange: Date[];
  constructor(private hDataService: HdataService, private datepipe: DatePipe, private formBuilder: FormBuilder) {
    this.tomorrowsDate.setDate(this.tomorrowsDate.getDate() + 1);
    this.form.dateRange.startDate = this.datepipe.transform(this.todaysDate, "dd/mm/yyyy");
    this.form.dateRange.endDate = this.datepipe.transform(this.tomorrowsDate, "dd/mm/yyyy");
  }

  /**
   * dontShowbb
   * emits a boolean variable, showBrowserBanners, set to false, in order not to show this component in the parent component.
   */
  dontShowbb(): any {
    this.showBrowserBanners = false;
    this.dontShowBB.emit(this.showBrowserBanners);
  }
  onSubmit(): void {
    this.hDataService.editSearchInputData(this.range.get('searchInput').value);
    this.hDataService.editDatesData([this.range.get('fechaInicio').value, this.range.get('fechaFin').value])
    // console.log("dateRange", this.dateRange);
    // window.location.reload();
    this.updateSearchInput();
  }

  ngOnInit(): void {
    // subscribo os datos a unha varable que creo e que é a que vou chamar por doquier
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
    console.log("dateRange in miniHotel's update method", this.dateRange);
  }
}
