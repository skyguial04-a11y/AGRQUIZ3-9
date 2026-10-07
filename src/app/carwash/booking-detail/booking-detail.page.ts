import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from '../../models/booking';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.page.html',
  styleUrls: ['./booking-detail.page.scss'],
  standalone: false,
})
export class BookingDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly bookingService = inject(BookingService);
  readonly booking?: Booking = this.bookingService.getBookingById(
    Number(this.route.snapshot.paramMap.get('id')),
  );

  completeBooking(): void {
    if (this.booking) {
      this.bookingService.markAsCompleted(this.booking.bookingId);
    }
  }
}
