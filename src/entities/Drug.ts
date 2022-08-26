import { Field, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";
import { BaseModel } from "./BaseModel";

@ObjectType()
@Entity()
export class Drug extends BaseModel {
  @Field()
  @Column()
  name: string;
}
