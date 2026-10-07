export interface CarWashService {
  serviceId: number;
  serviceName: string;
  /** Placeholder value; the UI renders a local icon instead of loading a file. */
  serviceImage: string;
  serviceDescription: string;
  serviceType: 'Basic' | 'Premium' | 'Detailing';
  vehicleType: 'Sedan' | 'SUV' | 'Van';
  servicePrice?: number;
}
