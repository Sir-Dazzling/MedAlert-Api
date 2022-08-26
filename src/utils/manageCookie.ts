import { Request, Response } from "express";
import auth from "../constants/auth";
import { format } from "date-fns";

export function clearCookie(req: Request, res: Response) {
  return new Promise((resolve) => {
    req.session.destroy((err) => {
      res.clearCookie(auth.COOKIE_NAME);
      if (err) {
        resolve(false);
        return;
      }
      resolve(true);
    });
  });
}

export function generateToken() {
  return Math.floor(100000 + Math.random() * 900000);
}

export function generateFlashCardNumber() {
  return format(Date.now(), "T").substring(9) + Math.floor(1000 + Math.random() * 9000);
}
