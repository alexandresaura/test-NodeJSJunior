import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Country from './Country';
import Language from './Language';

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column()
  language_id!: string;

  @ManyToOne(() => Language)
  @JoinColumn({ name: 'language_id' })
  language!: Language;

  @Column()
  country_id!: string;

  @ManyToOne(() => Country)
  @JoinColumn({ name: 'country_id' })
  country!: Country;

  @Column()
  billing_address_line1!: string;

  @Column({ nullable: true })
  billing_address_line2?: string;

  @Column()
  billing_city!: string;

  @Column()
  billing_state!: string;

  @Column()
  billing_zip_code!: string;

  @Column()
  billing_address_same_shipping_address!: boolean;

  @Column({ nullable: true })
  shipping_address_line1?: string;

  @Column({ nullable: true })
  shipping_address_line2?: string;

  @Column({ nullable: true })
  shipping_city?: string;

  @Column({ nullable: true })
  shipping_state?: string;

  @Column({ nullable: true })
  shipping_zip_code?: string;

  @Column()
  need_cut_off_device!: boolean;

  @Column()
  will_trackers_be_installed_on_bike_truck_machinery!: boolean;

  @Column()
  need_identify_fleet_drivers!: boolean;

  @Column()
  quantity!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default Order;
