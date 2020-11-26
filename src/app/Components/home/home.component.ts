import { BLACK_ON_WHITE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';
// import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  // dateRangeForm: FormGroup;
  // public startDate = new Date();
  public options = ["bla", "bla", "bla"];
  public hideIndication = true;
  public adultsNumber: number;
  public roomsNumber: number;
  public childrenNumber: number;
  // public searchInput: string;
  // item=1;
  search = {
    searchInput: "oneHotel",
    dateRange: "",
    // startDate: Date.now(),
    // endDate: Date.now()+1,
    adultsNumber: 2,
    childrenNumber: 0,
    roomsNumber: 1,
  }

  constructor(private dialog: MatDialog) {
    // this.searchInput= "myHotel";
    // this.search = {
    //   searchInput: "oneHotel",
    //   adultsNumber: 2,
    //   childrenNumber: 0,
    //   roomsNumber: 1,
    // }
  }
  private dialogRef: MatDialogRef<LoginComponent>;
  onClickedOutside(e: Event) {
    this.dialogRef.close();
    console.log('Clicked outside:', e);
  }
  openDialog() {
    const matDialogConfig= new MatDialogConfig();
    // matDialogConfig.disableClose=true;
    matDialogConfig.autoFocus = true;
    this.dialog.open(LoginComponent, matDialogConfig);
    
  }
  public getSearch(adultsNumber: HTMLInputElement, childrenNumber: HTMLInputElement, roomsNumber: HTMLInputElement) {

    this.adultsNumber = Number(adultsNumber.value),
      this.childrenNumber = Number(childrenNumber.value),
      this.roomsNumber = Number(roomsNumber.value);

    // adultsNumber.value='';
    // childrenNumber.value ='';
    // roomsNumber.value='';    
  }



}
