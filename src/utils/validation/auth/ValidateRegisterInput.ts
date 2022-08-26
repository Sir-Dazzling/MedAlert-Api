import { FieldError } from "../../../types/FieldError";
import { RegisterAccountInput } from "../../../types/Auth";
import { checkEmail, checkLength, checkPassword, checkPhoneNumber } from "./ValidatorChecks";

export const ValidateRegisterAccountDTO = (registerAccountDTO: RegisterAccountInput): FieldError[] => {
  const errors: FieldError[] = [];

  if (!checkLength(registerAccountDTO.firstName, 2, 20)) {
    errors.push({
      field: "firstName",
      message: "Too long or too short",
    });
  }

  if (!checkLength(registerAccountDTO.lastName, 2, 20)) {
    errors.push({
      field: "lastName",
      message: "Too long or too short",
    });
  }

  if (!checkEmail(registerAccountDTO.email)) {
    errors.push({
      field: "email",
      message: "Not a valid email address",
    });
  }
  if (!checkPhoneNumber(registerAccountDTO.phoneNumber)) {
    errors.push({
      field: "phoneNumber",
      message: "Not a valid phone number",
    });
  }

  if (!checkPassword(registerAccountDTO.password)) {
    errors.push({
      field: "password",
      message: "Password not strong enough",
    });
  }

  return errors.length > 0 ? errors : [];
};
