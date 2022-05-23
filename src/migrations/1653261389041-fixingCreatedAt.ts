import { MigrationInterface, QueryRunner } from "typeorm";

export class fixingCreatedAt1653261389041 implements MigrationInterface {
  name = "fixingCreatedAt1653261389041";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "updated_at" DROP NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "updated_at" SET NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "created_at" DROP DEFAULT`
    );
  }
}
