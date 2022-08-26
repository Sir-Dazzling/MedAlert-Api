import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1661261756382 implements MigrationInterface {
    name = 'migration1661261756382'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reminder" DROP COLUMN "dosage1"`);
        await queryRunner.query(`ALTER TABLE "reminder" ADD "dosage1" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reminder" DROP COLUMN "dosage2"`);
        await queryRunner.query(`ALTER TABLE "reminder" ADD "dosage2" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reminder" DROP COLUMN "dosage3"`);
        await queryRunner.query(`ALTER TABLE "reminder" ADD "dosage3" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reminder" DROP COLUMN "dosage3"`);
        await queryRunner.query(`ALTER TABLE "reminder" ADD "dosage3" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "reminder" DROP COLUMN "dosage2"`);
        await queryRunner.query(`ALTER TABLE "reminder" ADD "dosage2" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reminder" DROP COLUMN "dosage1"`);
        await queryRunner.query(`ALTER TABLE "reminder" ADD "dosage1" TIMESTAMP NOT NULL`);
    }

}
