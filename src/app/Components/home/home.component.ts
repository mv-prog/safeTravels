import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
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
  public adultsNumber:number;
  public roomsNumber:number;
  public childrenNumber:number;
  item=1;
  private search:Object;
  constructor(private route: ActivatedRoute) {
    this.search = {
      adultsNumber: 2,
      childrenNumber: 0,
      roomsNumber: 1,
    }  
  }
  
  public getSearch(adultsNumber:HTMLInputElement, childrenNumber:HTMLInputElement, roomsNumber:HTMLInputElement){
    
      this.adultsNumber= Number(adultsNumber.value),
      this.childrenNumber= Number(childrenNumber.value),
      this.roomsNumber=Number(roomsNumber.value);
    
    // adultsNumber.value='';
    // childrenNumber.value ='';
    // roomsNumber.value='';    
    }
  
  

}
