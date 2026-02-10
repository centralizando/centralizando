
export interface Service {
  id: string;
  name: string;
  description: string;
  duration_minutes: number;
  price: number;
  active: boolean;
}

export interface Coupon {
  id: string;
  code: string;
  discount_type: 'fixed' | 'percentage';
  discount_value: number;
  expires_at: string;
  usage_limit: number;
  active: boolean;
}

export interface Appointment {
  id: string;
  service_id: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  original_price: number;
  final_price: number;
  discount_amount: number;
}

export interface Settings {
  auto_confirm: boolean;
  work_start: string;
  work_end: string;
  lunch_start: string;
  lunch_end: string;
  work_days: number[];
}
