import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular/lazy';
import { CarwashPageRoutingModule } from './carwash-routing.module';
import { CarwashTabsPage } from './carwash-tabs.page';
import { ServicesPage } from './services/services.page';
import { BookingsPage } from './bookings/bookings.page';
import { AccountPage } from './account/account.page';
import { ServiceDetailPage } from './service-detail/service-detail.page';
import { BookingDetailPage } from './booking-detail/booking-detail.page';

@NgModule({
  imports: [CommonModule, IonicModule, CarwashPageRoutingModule],
  declarations: [
    CarwashTabsPage,
    ServicesPage,
    BookingsPage,
    AccountPage,
    ServiceDetailPage,
    BookingDetailPage,
  ],
})
export class CarwashPageModule {}
