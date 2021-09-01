import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LoginComponent } from './Components/login/login.component';
import { HotelsComponent } from './Components/hotels/hotels.component';
import { Error404Component } from './Components/error404/error404.component';
import { ListusersComponent } from './Components/listusers/listusers.component';
import { BookingsComponent } from './Components/bookings/bookings.component';
import { HotelDetailsComponent } from './Components/hotelDetails/hotelDetails.component';
import { SafetyRegulationsComponent } from './Components/safety-regulations/safety-regulations.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'hotels', component: HotelsComponent,
    children: [
      {
        path: 'hotel/:id', component: HotelDetailsComponent
      },
    ]
  },
  {
    path: 'hotel/:id',
    component: HotelDetailsComponent
  },
  {
    path: 'users', component: ListusersComponent
  },
  {
    path: 'error404', component: Error404Component
  },
  {
    path: 'mybookings', component: BookingsComponent
  },
  {path: 'logout', component: LoginComponent},
  {
    path: 'checkout', component: Error404Component
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'safety-regulations', component: SafetyRegulationsComponent
  },
  {
    path: '**', redirectTo: 'error404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
exports: [RouterModule]
})
export class AppRoutingModule { }
