import { Field, InputType } from "type-graphql";

@InputType()
export class LoginInput {
  @Field()
  username: string;

  @Field()
  password: string;
}

@InputType()
export class RegisterAccountInput {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  deviceId?: string;
}
