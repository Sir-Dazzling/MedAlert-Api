import { Resolver, Query } from "type-graphql";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  public async hello(): Promise<string> {
    return "Hello World!";
  }
}
