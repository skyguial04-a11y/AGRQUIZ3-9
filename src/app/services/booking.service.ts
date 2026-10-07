import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private bookings: Booking[] = [
    {
      bookingId: 1,
      serviceName: 'Basic Exterior Wash',
      bookingDate: new Date(2026, 9, 8),
      bookingStatus: 'Scheduled',
    },
    {
      bookingId: 2,
      serviceName: 'Premium Wash and Wax',
      bookingDate: new Date(2026, 9, 7),
      bookingStatus: 'On-Going',
    },
    {
      bookingId: 3,
      serviceName: 'Full Interior Detailing',
      bookingDate: new Date(2026, 9, 2),
      bookingStatus: 'Completed',
    },
  ];

  getBookings(): Booking[] {
    return this.bookings;
  }

  getBookingById(id: number): Booking | undefined {
    return this.bookings.find((booking) => booking.bookingId === id);
  }

  markAsCompleted(id: number): Booking | undefined {
    const booking = this.getBookingById(id);
    if (booking) {
      booking.bookingStatus = 'Completed';
    }
    return booking;
  }
}
