import { Drug } from "./../entities/Drug";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class DrugResponse {
  @Field(() => Drug, { nullable: true })
  drug?: Drug | undefined | null;

  @Field(() => [Drug], { nullable: true })
  drugs?: Drug[] | undefined | null;
}
