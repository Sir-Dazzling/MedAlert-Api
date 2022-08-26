import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { MyContext } from "./../types/MyContext";
import { CreateReminderInput, ReminderResponse } from "./../types/Reminder";

@Resolver()
export class ReminderResolver {
  @Mutation(() => ReminderResponse)
  public async createReminder(@Arg("data") data: CreateReminderInput, @Ctx() { ReminderService, req }: MyContext) {
    const response = await ReminderService.createReminder({ req }, data);
    return response;
  }

  @Query(() => ReminderResponse)
  public async getUserReminders(@Ctx() { ReminderService, req }: MyContext) {
    return await ReminderService.getAllRemindersForUser({ req });
  }
}
