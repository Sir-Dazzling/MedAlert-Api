import { Reminder } from "./Reminder";
import { Field, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany } from "typeorm";
import { BaseModel } from "./BaseModel";

@ObjectType()
@Entity()
export class User extends BaseModel {
  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column({ unique: true })
  username: string;

  @Field()
  @Column({ unique: true })
  phoneNumber: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  profilePicture: string;

  @Column()
  password: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  deviceId: string;

  @Field(() => Reminder, { nullable: true })
  @OneToMany(() => Reminder, (reminder) => reminder.user)
  reminders: Reminder[];
}
