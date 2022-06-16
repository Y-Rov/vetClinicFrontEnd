export interface Address {
  userId: number;
  city?: string | null;
  street?: string | null;
  house?: string | null;
  apartmentNumber?: number | null;
  zipCode?: string | null;
}
