import { AppDataSource } from "./../constants/data-source";
import { ValidateRegisterAccountDTO } from "./../utils/validation/auth/ValidateRegisterInput";
import argon from "argon2";
import { clearCookie } from "../utils/manageCookie";
import { Equal } from "typeorm";
import { User } from "./../entities/User";
import { AccountResponse } from "./../types/Account";
import { LoginInput, RegisterAccountInput } from "./../types/Auth";
import { FieldError } from "./../types/FieldError";
import { RequestAndResponseType } from "./../types/MyContext";

export class AuthService {
  // Login a user
  async login(loginDTO: LoginInput): Promise<AccountResponse> {
    const user = await User.findOneBy({ username: loginDTO.username });
    const errors: FieldError[] = [];

    if (!user) {
      errors.push({
        field: "email",
        message: "Invalid Credentials",
      });
      return { errors };
    }

    const passwordValid = await argon.verify(user.password, loginDTO.password);

    if (!passwordValid) {
      errors.push({ field: "username", message: "Invalid Credentials" });
      return { errors };
    }
    return { errors, user };
  }

  // Get currently logged in user
  async getLoggedInUser({ req }: RequestAndResponseType): Promise<AccountResponse> {
    return {
      errors: [],
      user: await User.findOne({
        where: { id: Equal(req?.session.userId) },
      }),
    };
  }

  // Logout user
  async logout(req: any, res: any): Promise<Boolean> {
    return (await clearCookie(req, res)) as boolean;
  }

  // Register user account
  public async registerAccount(registerAccountDTO: RegisterAccountInput): Promise<AccountResponse> {
    const errors = ValidateRegisterAccountDTO(registerAccountDTO);
    if (errors.length > 0) {
      return { errors };
    }
    const hashedPassword = await argon.hash(registerAccountDTO.password);
    let user = null as unknown as User;

    try {
      await AppDataSource.transaction(async (transactionEntityManager) => {
        // Step1: Insert user data into db after valdiation
        const result = await transactionEntityManager
          .createQueryBuilder()
          .insert()
          .into(User)
          .values({
            password: hashedPassword,
            username: registerAccountDTO.username,
            deviceId: registerAccountDTO.deviceId,
          })
          .returning("*")
          .execute();
        user = result.raw[0] as User;
      });
    } catch (error) {
      // Checking for unique_fields error
      if (error.code === "23505") {
        if (error.detail.includes("username")) {
          errors.push({
            field: "username",
            message: "Username already in use",
          });
        }
      } else {
        errors.push({
          field: "Unknown",
          message: "Unseen server error, please try again later",
        });
      }
    }
    return { errors, user };
  }
}
