import { EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { UserService } from './../../user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  public hideIndication = true;
  public showBrowserBanners: any;
  public isFalse: boolean;
  content?: string;
  @Output() showBB = new EventEmitter<void>();
  constructor(private userService: UserService) {
    this.showBrowserBanners = true;
    this.isFalse = false;
  }
  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  /**
   * dontShowbb
   * emits a boolean variable, showBrowserBanners, set to false, in order not to show this component in the hotels page.
   */
  dontShowbb(): boolean {
    return this.showBrowserBanners = false;
    // this.dontShowBB.emit(this.showBrowserBanners);
  }
  public showbb(): void{
    this.showBrowserBanners = true;
    this.showBB.emit(this.showBrowserBanners);
  }

}
