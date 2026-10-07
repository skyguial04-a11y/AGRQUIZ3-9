import { Component, inject } from '@angular/core';
import { Booking } from '../../models/booking';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
  standalone: false,
})
export class BookingsPage {
  private readonly bookingService = inject(BookingService);
  readonly bookings: Booking[] = this.bookingService.getBookings();
  readonly calendarValue = this.toCalendarDate(this.bookings[0].bookingDate);
  readonly highlightedDates = this.bookings.map((booking) => ({
    date: this.toCalendarDate(booking.bookingDate),
    backgroundColor: '#e91e8c',
    textColor: '#ffffff',
  }));

  private toCalendarDate(date: Date): string {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${date.getFullYear()}-${month}-${day}`;
  }
}
