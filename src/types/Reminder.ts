import { Field, InputType, ObjectType } from "type-graphql";
import { Reminder } from "./../entities/Reminder";

@InputType()
export class CreateReminderInput {
  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field()
  drug: string;

  @Field()
  dosage1: string;

  @Field()
  dosage2: string;

  @Field({ nullable: true })
  dosage3: string;

  @Field()
  beforeFood: boolean;

  @Field()
  details: string;
}

export class ConvertedReminderItem {
  date: Date;
  reminder: Reminder;
}

// export class ConvertedReminder {
//   convertedReminder: ConvertedReminderItem[];
// }

@ObjectType()
export class ReminderResponse {
  @Field(() => Reminder, { nullable: true })
  reminder?: Reminder | undefined | null;

  // @Field(Array, { nullable: true })
  // convertedReminders?: any | null;

  @Field(() => [Reminder], { nullable: true })
  reminders?: Reminder[] | undefined | null;
}
