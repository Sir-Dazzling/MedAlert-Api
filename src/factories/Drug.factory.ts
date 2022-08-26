import { faker } from "@faker-js/faker";
import { define } from "typeorm-seeding";
import { Drug } from "./../entities/Drug";

define(Drug, (fakerProp: typeof faker) => {
  const name = fakerProp.random.word();

  const drug = new Drug();
  drug.name = name;

  return drug;
});
