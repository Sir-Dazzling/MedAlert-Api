import argon from "argon2";
import { Seeder } from "typeorm-seeding";
import { User } from "./../entities/User";

export default class CreateUsers implements Seeder {
  public async run(factory: any): Promise<any> {
    const defaultPassword = (await argon.hash("Password@123")) as string;

    await factory(User)().create({
      firstName: "Otti",
      lastName: "Daniel",
      username: "SirDazzling",
      phoneNumber: "08091764286",
      email: "ottidan20@gmail.com",
      password: defaultPassword,
    });

    await factory(User)().create({
      firstName: "Iriekpen",
      lastName: "Daniel",
      username: "Iriekpen",
      phoneNumber: "08091794286",
      email: "danieliriekpen@gmail.com",
      password: defaultPassword,
    });

    await factory(User)().createMany(5, { password: defaultPassword });
  }
}
