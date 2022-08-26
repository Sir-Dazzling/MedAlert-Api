import { faker } from "@faker-js/faker";
import { define } from "typeorm-seeding";
import { User } from "./../entities/User";

define(User, (fakerProp: typeof faker) => {
  const firstName = fakerProp.name.firstName();
  const lastName = fakerProp.name.lastName();
  const username = fakerProp.internet.userName();
  const phoneNumber = faker.phone.number();
  const email = fakerProp.internet.email();

  const user = new User();
  user.email = email;
  user.firstName = firstName;
  user.lastName = lastName;
  user.username = username;
  user.phoneNumber = phoneNumber;

  return user;
});
