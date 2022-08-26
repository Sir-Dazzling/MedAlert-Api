import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { AccountResponse } from "./../types/Account";
import { LoginInput, RegisterAccountInput } from "./../types/Auth";
import { MyContext } from "./../types/MyContext";

@Resolver()
export class AuthResolver {
  @Mutation(() => AccountResponse)
  public async login(@Arg("data") data: LoginInput, @Ctx() { AuthService, req }: MyContext) {
    const response = await AuthService.login(data);
    if (response.errors.length === 0) {
      req.session.userId = response.user?.id;
    }
    return response;
  }

  @Query(() => AccountResponse)
  public async getLoggedInUser(@Ctx() { AuthService, req }: MyContext) {
    return await AuthService.getLoggedInUser({ req });
  }

  @Mutation(() => Boolean)
  public async logout(@Ctx() { req, res, AuthService }: MyContext) {
    return await AuthService.logout(req, res);
  }

  @Mutation(() => AccountResponse)
  public async registerAccount(@Arg("data") data: RegisterAccountInput, @Ctx() { AuthService, req }: MyContext) {
    const response = await AuthService.registerAccount(data);
    if (response.errors.length === 0) {
      req.session.userId = response.user?.id;
    }
    return response;
  }
}
