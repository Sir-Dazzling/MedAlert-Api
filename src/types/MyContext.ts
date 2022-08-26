import { DrugService } from "./../services/DrugService";
import { ReminderService } from "./../services/ReminderService";
import { AuthService } from "./../services/auth";
import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import { Redis } from "ioredis";
import { Field, InputType } from "type-graphql";

export class MyContext {
  req: Request & { session: Session & Partial<SessionData> & { userId: string | number | undefined | any } };
  redis: Redis;
  res: Response;
  AuthService: AuthService;
  ReminderService: ReminderService;
  DrugService: DrugService;
}

export class RequestAndResponseType {
  req?: Request & { session: Session & Partial<SessionData> & { userId: string | number | undefined | any } };
  res?: Response;
}

@InputType()
export class PaginatedInputType {
  @Field()
  skip: number;

  @Field()
  take: number;
}
