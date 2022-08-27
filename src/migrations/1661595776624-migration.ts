import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1661595776624 implements MigrationInterface {
  name = "migration1661595776624";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "reminder" ADD "startDate" character varying NOT NULL`);
    await queryRunner.query(`ALTER TABLE "reminder" ADD "endDate" character varying NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "reminder" DROP COLUMN "endDate"`);
    await queryRunner.query(`ALTER TABLE "reminder" DROP COLUMN "startDate"`);
  }
}
