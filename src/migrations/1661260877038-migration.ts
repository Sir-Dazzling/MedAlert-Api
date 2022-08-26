import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1661260877038 implements MigrationInterface {
    name = 'migration1661260877038'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reminder" ADD "dosage1" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reminder" ADD "dosage2" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reminder" ADD "dosage3" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reminder" DROP COLUMN "dosage3"`);
        await queryRunner.query(`ALTER TABLE "reminder" DROP COLUMN "dosage2"`);
        await queryRunner.query(`ALTER TABLE "reminder" DROP COLUMN "dosage1"`);
    }

}
