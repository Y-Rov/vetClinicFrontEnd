import {ResourceModel} from "./ResourceModel";

export class Animal extends ResourceModel<Animal>{
  ownerId?: number;
  nickName?: string | null;
  birthDate?: Date;
  PhotoUrl?: string | null;

  constructor(model?: Partial<Animal>) {
    super(model);
  }
}
