import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne } from "typeorm";
import { BaseModel } from "./BaseModel";
import { User } from "./User";

@ObjectType()
@Entity()
export class Reminder extends BaseModel {
  @Field()
  @Column()
  startDate: String;

  @Field()
  @Column()
  endDate: string;

  @Field()
  @Column()
  details: string;

  @Field()
  @Column()
  drug: string;

  @Field()
  @Column()
  dosage1: string;

  @Field()
  @Column()
  dosage2: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  dosage3: string;

  @Field()
  @Column()
  beforeFood: boolean;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.reminders)
  user: User;
}
