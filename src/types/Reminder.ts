import { Field, InputType, ObjectType } from "type-graphql";
import { Reminder } from "./../entities/Reminder";

@InputType()
export class CreateReminderInput {
  @Field()
  startDate: String;

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

@ObjectType()
export class ReminderResponse {
  @Field(() => Reminder, { nullable: true })
  reminder?: Reminder | undefined | null;

  @Field(() => [Reminder], { nullable: true })
  reminders?: Reminder[] | undefined | null;
}
