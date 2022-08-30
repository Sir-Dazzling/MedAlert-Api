import { DataSource } from "typeorm";
import "dotenv/config";
import general from "./general";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: general.DATABASE_URL,
  // TO generate diff migrations sql with staging db
  // url: process.env.STAGING_DATABASE_URL,
  entities: ["dist/src/entities/*.js"],
  migrations: ["dist/src/migrations/*.js"],
  ssl: false,
  synchronize: false,
  logging: process.env.NODE_ENV === "development",
  migrationsTableName: "custom_migrations",
  migrationsRun: process.env.NODE_ENV === "development",
});
