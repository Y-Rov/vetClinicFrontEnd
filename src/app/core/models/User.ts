import {ResourceModel} from "./ResourceModel";

export class User extends ResourceModel<User> {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  birthDate?: Date | null;
  role?: string;
  portfolio?: string;
  specializations?: string[];

  constructor(model?: Partial<User>) {
    super(model);
  }
}
