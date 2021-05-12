import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mini-hotels-form',
  templateUrl: './mini-hotels-form.component.html',
  styleUrls: ['./mini-hotels-form.component.scss']
})
export class MiniHotelsFormComponent implements OnInit {
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  public options = ['All places', 'Santiago', 'Lugo capital', 'Portelo Rural'];
  @Input() search;
  @Output() sendHotelsData = new EventEmitter<void>();
  constructor() { }
  public adRoOptions = [
    {"id": 1},
    {"id": 2},
    {"id": 3},
    {"id": 4},
    {"id": 5},
    {"id": 6},
    {"id": 7},
    {"id": 8},
    {"id": 9},
    {"id": 10}
  ]
  // public adSelectOptions = [
  //   {"id": 1, "name": "a"},
  //   {"id": 2, "name": "b"},
  //   {"id": 3, "name": "c"},
  //   {"id": 4, "name": "d"},
  //   {"id": 5, "name": "e"},
  //   {"id": 6, "name": "f"},
  //   {"id": 7, "name": "g"},
  //   {"id": 8, "name": "h"},
  //   {"id": 9, "name": "i"},
  //   {"id": 10, "name": "j"}
  // ]
  public adSelected = this.adRoOptions[1].id;

  public chOptions = [
    {"id": 0},
    {"id": 1},
    {"id": 2},
    {"id": 3},
    {"id": 4},
    {"id": 5},
    {"id": 6},
    {"id": 7},
    {"id": 8},
    {"id": 9},
    {"id": 10}
  ]
  public chSelected = this.chOptions[0].id;

  // public roSelectOptions = [
  //   {"id": 1},
  //   {"id": 2},
  //   {"id": 3},
  //   {"id": 4},
  //   {"id": 5},
  //   {"id": 6},
  //   {"id": 7},
  //   {"id": 8},
  //   {"id": 9},
  //   {"id": 10}
  // ]
  public roSelected = this.adRoOptions[0].id;
  sendData(): any{
    this.sendHotelsData.emit(this.search);
  }
  ngOnInit(): void {
  }

}
