import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'nlbanner',
  templateUrl: './nlbanner.component.html',
  styleUrls: ['./nlbanner.component.scss']
})
export class NlbannerComponent implements OnInit {
    private nlEmail:string;
  constructor() { }
  nlemailForm= new FormGroup({
    nlemail: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
  }

}