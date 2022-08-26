import { Ctx, Query, Resolver } from "type-graphql";
import { DrugResponse } from "./../types/Drug";
import { MyContext } from "./../types/MyContext";

@Resolver()
export class DrugResolver {
  @Query(() => DrugResponse)
  public async getDrugs(@Ctx() { DrugService }: MyContext) {
    return await DrugService.getAllDrugs();
  }
}
