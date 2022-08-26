import { isValid } from "date-fns";

export function checkLength(input: string, min: number, max: number) {
  return input.length >= min && input.length <= max;
}

export function checkEmail(email: string) {
  const userEmailRegex =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return userEmailRegex.test(email);
}

export function checkPhoneNumber(phoneNumber: string) {
  const userPhoneNumberRegex = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/gm;
  return userPhoneNumberRegex.test(phoneNumber);
}

// Strong password - must consist of one of the follwing:
// uppercase. lowercase, numeric, special and must be at least 8 characters long
export function checkPassword(password: string) {
  const userPasswordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^?&*])(?=.{8,})");
  return userPasswordRegex.test(password);
}

export function checkDate(date: string) {
  return isValid(Number(date));
}
