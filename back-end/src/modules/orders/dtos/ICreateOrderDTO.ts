export default interface ICreateOrderDTO {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  language_id: string;
  country_id: string;
  billing_address_line1: string;
  billing_address_line2?: string;
  billing_city: string;
  billing_state: string;
  billing_zip_code: string;
  billing_address_same_shipping_address: boolean;
  shipping_address_line1?: string;
  shipping_address_line2?: string;
  shipping_city?: string;
  shipping_state?: string;
  shipping_zip_code?: string;
  need_cut_off_device: boolean;
  will_trackers_be_installed_on_bike_truck_machinery: boolean;
  need_identify_fleet_drivers: boolean;
  quantity: number;
}
