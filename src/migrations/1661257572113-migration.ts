import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1661257572113 implements MigrationInterface {
    name = 'migration1661257572113'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "reminder" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "details" character varying NOT NULL, "beforeFood" boolean NOT NULL, "userId" uuid, CONSTRAINT "PK_9ec029d17cb8dece186b9221ede" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "reminder" ADD CONSTRAINT "FK_c4cc144b2a558182ac6d869d2a4" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reminder" DROP CONSTRAINT "FK_c4cc144b2a558182ac6d869d2a4"`);
        await queryRunner.query(`DROP TABLE "reminder"`);
    }

}
