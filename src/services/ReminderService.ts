import { AppDataSource } from "./../constants/data-source";
import { Equal } from "typeorm";
import { Reminder } from "./../entities/Reminder";
import { User } from "./../entities/User";
import { RequestAndResponseType } from "./../types/MyContext";
import { CreateReminderInput } from "./../types/Reminder";

export class ReminderService {
  async createReminder({ req }: RequestAndResponseType, createReminderDTO: CreateReminderInput): Promise<any> {
    const user = (await User.findOneBy({ id: Equal(req?.session.userId) })) as User;

    console.log("user is ", req?.session.userId);

    const reminder = await AppDataSource.createQueryBuilder()
      .insert()
      .into(Reminder)
      .values({ ...createReminderDTO, user })
      .returning("*")
      .execute();

    return { reminder: reminder.raw[0] };
  }

  //   Get all reminders for a user
  async getAllRemindersForUser({ req }: RequestAndResponseType): Promise<any> {
    const user = (await User.findOneBy({ id: Equal(req?.session.userId) })) as User;

    console.log("user is ", req?.session.userId);

    const reminders = await AppDataSource.getRepository(Reminder)
      .createQueryBuilder("reminder")
      .leftJoinAndSelect("reminder.user", "user")
      .where("user.id = :id", { id: user.id })
      .cache(true)
      .getMany();

    return { reminders };
  }
}
