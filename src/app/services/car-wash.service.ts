import { Injectable } from '@angular/core';
import { CarWashService } from '../models/car-wash-service';

@Injectable({ providedIn: 'root' })
export class CarWashDataService {
  private services: CarWashService[] = [
    {
      serviceId: 1,
      serviceName: 'Basic Exterior Wash',
      serviceImage: 'placeholder',
      serviceDescription:
        'Quick exterior hand wash, rinse, and air dry. Includes tire rinse and window wipe-down.',
      serviceType: 'Basic',
      vehicleType: 'Sedan',
      servicePrice: 150,
    },
    {
      serviceId: 2,
      serviceName: 'Premium Wash and Wax',
      serviceImage: 'placeholder',
      serviceDescription:
        'Full exterior wash, hand wax, tire shine, and interior vacuum for a glossy, protected finish.',
      serviceType: 'Premium',
      vehicleType: 'SUV',
      servicePrice: 450,
    },
    {
      serviceId: 3,
      serviceName: 'Full Interior Detailing',
      serviceImage: 'placeholder',
      serviceDescription:
        'Deep clean of seats, carpets, dashboard, and door panels with stain removal and odor treatment.',
      serviceType: 'Detailing',
      vehicleType: 'Sedan',
      servicePrice: 1500,
    },
    {
      serviceId: 4,
      serviceName: 'Van Deep Clean',
      serviceImage: 'placeholder',
      serviceDescription:
        'Complete wash for larger vehicles: exterior wash, undercarriage rinse, and full cabin vacuum.',
      serviceType: 'Premium',
      vehicleType: 'Van',
      servicePrice: 700,
    },
  ];

  getServices(): CarWashService[] {
    return this.services;
  }

  getServiceById(id: number): CarWashService | undefined {
    return this.services.find((service) => service.serviceId === id);
  }
}
