import { Component, inject } from '@angular/core';
import { CarWashService } from '../../models/car-wash-service';
import { CarWashDataService } from '../../services/car-wash.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  standalone: false,
})
export class ServicesPage {
  private readonly carWashData = inject(CarWashDataService);
  readonly services: CarWashService[] = this.carWashData.getServices();
}
