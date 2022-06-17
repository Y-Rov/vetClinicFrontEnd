import {ResourceModel} from "./ResourceModel";

export class Address extends ResourceModel<Address>{
  city?: string | null;
  street?: string | null;
  house?: string | null;
  apartmentNumber?: number | null;
  zipCode?: string | null;

  constructor(model?: Partial<Address>) {
    super(model);
  }
}
