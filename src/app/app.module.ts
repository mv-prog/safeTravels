import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { MaterialModule } from './Modules/material/material.module';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './Components/contact/contact.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule } from '@angular/material/dialog';
import { ClickOutsideModule } from 'ng-click-outside';
import { CitybannersComponent } from './Components/citybanners/citybanners.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NlbannerComponent } from './Components/nlbanner/nlbanner.component';
import { FooterComponent } from './Components/footer/footer.component';
import { OffersComponent } from './Components/offers/offers.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HotelsComponent } from './Components/hotels/hotels.component';
import { Error404Component } from './Components/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelsformComponent } from './Components/hotelsform/hotelsform.component';
import { RecommendedComponent } from './Components/recommended/recommended.component';
import { CalculateOriginalPricePipe } from './Components/calculate-original-price.pipe';
import { FilterPipe } from './Components/filter.pipe';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { OrderByPipe } from './Components/order-by.pipe';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [AppComponent, HomeComponent, ContactComponent, OrderByPipe, LoginComponent, SignupComponent, CitybannersComponent, NlbannerComponent, FooterComponent, OffersComponent, NavbarComponent, HotelsComponent, Error404Component, HotelsformComponent, RecommendedComponent, CalculateOriginalPricePipe, FilterPipe, OrderByPipe],
  // tslint:disable-next-line: max-line-length
  imports: [MDBBootstrapModule.forRoot(), BrowserModule, AppRoutingModule, FlexLayoutModule, MaterialModule, MatIconModule, MatInputModule, MatToolbarModule, BrowserAnimationsModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule,
    // tslint:disable-next-line: max-line-length
    MatSelectModule, MatCheckboxModule , MatAutocompleteModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatCardModule, MatDialogModule, ClickOutsideModule, HttpClientModule],
  providers: [ {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, SignupComponent]
})
export class AppModule {}
