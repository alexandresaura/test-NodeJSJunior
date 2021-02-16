import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateOrders1613339066613 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'first_name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'last_name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'phone',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'language_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'country_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'billing_address_line1',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'billing_address_line2',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'billing_city',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'billing_state',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'billing_zip_code',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'billing_address_same_shipping_address',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'shipping_address_line1',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'shipping_address_line2',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'shipping_city',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'shipping_state',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'shipping_zip_code',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'need_cut_off_device',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'will_trackers_be_installed_on_bike_truck_machinery',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'need_identify_fleet_drivers',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'quantity',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys('orders', [
      new TableForeignKey({
        name: 'OrderLanguage',
        columnNames: ['language_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'languages',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
      new TableForeignKey({
        name: 'OrderCountry',
        columnNames: ['country_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'countries',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('orders', 'OrderLanguage');

    await queryRunner.dropForeignKey('orders', 'OrderCountry');

    await queryRunner.dropTable('orders');
  }
}
