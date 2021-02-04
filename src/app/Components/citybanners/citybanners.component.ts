import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'citybanners',
  templateUrl: './citybanners.component.html',
  styleUrls: ['./citybanners.component.scss']
})
//export class CitybannersComponent implements OnInit {
  export class CitybannersComponent {
  private city1:string;
  private city1Img:string;
  private lands1:string;
  constructor() { 
    this.city1="santiago.jpg"; 
    this.city1Img="santiago1.jpg";
    this.lands1="Sonreiras";
  }
  getSantImg(){
    return this.city1Img;
  }
  setCity1(city:string){
    return this.city1=city;
  }
  getCity1(){
    return this.city1;
  }
  setLands1(lands:string){
    return this.lands1=lands;
  }
  getLands1(){
    return this.lands1;
  }
   ngOnInit(): void {
   }

}
