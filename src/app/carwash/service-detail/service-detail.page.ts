import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarWashService } from '../../models/car-wash-service';
import { CarWashDataService } from '../../services/car-wash.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.page.html',
  styleUrls: ['./service-detail.page.scss'],
  standalone: false,
})
export class ServiceDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly carWashData = inject(CarWashDataService);
  readonly service?: CarWashService = this.carWashData.getServiceById(
    Number(this.route.snapshot.paramMap.get('id')),
  );

  bookService(): void {
    void this.router.navigateByUrl('/carwash/bookings');
  }
}
