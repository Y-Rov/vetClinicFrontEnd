import { ResourceModel } from "./ResourceModel";

export class User extends ResourceModel<User> {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  birthDate?: Date;
  role?: string;
  portfolio?: string;
  specializations?: string[];

  constructor(model?: Partial<User>) {
    super(model);
  }
}
