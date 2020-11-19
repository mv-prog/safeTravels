import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
// import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
   @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  // dateRangeForm: FormGroup;
  // public startDate = new Date();
  public options=["bla", "bla", "bla"];
  public hideIndication=true;
  constructor() {}
  

}
