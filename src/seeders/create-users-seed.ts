import argon from "argon2";
import { Seeder } from "typeorm-seeding";
import { User } from "./../entities/User";

export default class CreateUsers implements Seeder {
  public async run(factory: any): Promise<any> {
    const defaultPassword = (await argon.hash("Password@123")) as string;

    await factory(User)().create({
      username: "SirDazzling",
      password: defaultPassword,
    });

    await factory(User)().create({
      username: "Iriekpen",
      password: defaultPassword,
    });

    await factory(User)().createMany(5, { password: defaultPassword });
  }
}
