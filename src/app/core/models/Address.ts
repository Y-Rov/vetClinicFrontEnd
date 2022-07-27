import {ResourceModel} from "./ResourceModel";

export class Address extends ResourceModel<Address> {
  city?: string;
  street?: string;
  house?: string;
  apartmentNumber?: number;
  zipCode?: string;

  constructor(model?: Partial<Address>) {
    super(model);
  }
}
