import { Portfolio } from "./Portfolio";
import { ResourceModel } from "./ResourceModel";
import { Specialization } from "./Specialization";

export class User extends ResourceModel<User> {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  birthDate?: Date;
  role?: string;
  profilePicture?: string;
  portfolio?: Portfolio;
  specializations?: Specialization[];

  constructor(model?: Partial<User>) {
    super(model);
  }
}
