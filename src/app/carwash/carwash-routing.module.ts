import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarwashTabsPage } from './carwash-tabs.page';
import { ServicesPage } from './services/services.page';
import { BookingsPage } from './bookings/bookings.page';
import { AccountPage } from './account/account.page';
import { ServiceDetailPage } from './service-detail/service-detail.page';
import { BookingDetailPage } from './booking-detail/booking-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CarwashTabsPage,
    children: [
      { path: '', redirectTo: 'services', pathMatch: 'full' },
      { path: 'services', component: ServicesPage },
      { path: 'bookings', component: BookingsPage },
      { path: 'my-account', component: AccountPage },
      { path: 'services/:id', component: ServiceDetailPage },
      { path: 'bookings/:id', component: BookingDetailPage },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarwashPageRoutingModule {}
