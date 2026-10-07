export interface Booking {
  bookingId: number;
  serviceName: string;
  bookingDate: Date;
  bookingStatus: 'Scheduled' | 'On-Going' | 'Completed';
}
