import { DrugService } from "./../services/DrugService";
import { AuthService } from "./../services/auth";
import { ReminderService } from "./../services/ReminderService";

export default {
  AuthService: new AuthService(),
  ReminderService: new ReminderService(),
  DrugService: new DrugService(),
};
