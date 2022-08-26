import { BaseEntity, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class BaseModel extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String)
  @CreateDateColumn({ type: "timestamptz" })
  createdAt: Date;

  @Field(() => String)
  @CreateDateColumn({ type: "timestamptz" })
  updatedAt: Date;

  @Field(() => String, { nullable: true })
  @DeleteDateColumn({ type: "timestamptz" })
  deletedAt: Date;
}
