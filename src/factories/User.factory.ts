import { faker } from "@faker-js/faker";
import { define } from "typeorm-seeding";
import { User } from "./../entities/User";

define(User, (fakerProp: typeof faker) => {
  const username = fakerProp.internet.userName();

  const user = new User();
  user.username = username;
  return user;
});
