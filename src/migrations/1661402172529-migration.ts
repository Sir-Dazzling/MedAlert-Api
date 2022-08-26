import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1661402172529 implements MigrationInterface {
    name = 'migration1661402172529'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reminder" ADD "drug" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reminder" DROP COLUMN "drug"`);
    }

}
