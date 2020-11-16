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
@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule, MaterialModule, MatIconModule, MatToolbarModule, BrowserAnimationsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
