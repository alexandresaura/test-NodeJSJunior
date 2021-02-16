import { MigrationInterface, QueryRunner } from 'typeorm';

export default class InsertLanguages1613159155341
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO languages (name) VALUES
      ('English'), ('French'), ('Arabic'), ('Spanish'), ('Portuguese'),
      ('German'), ('Serbo-Croatian'), ('Italian'), ('Malay'), ('Russian'),
      ('Swahili'), ('Dutch'), ('Persian'), ('Tamil'), ('Quechua'), ('Chinese')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM languages WHERE name IN (
        'English', 'French', 'Arabic', 'Spanish', 'Portuguese', 'German',
        'Serbo-Croatian', 'Italian', 'Malay', 'Russian', 'Swahili', 'Dutch',
        'Persian', 'Tamil', 'Quechua', 'Chinese'
      )
    `);
  }
}
