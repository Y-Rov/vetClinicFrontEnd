export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    birthDate: Date;
    role?: string;
    portfolio?: string;
    specializations?: string[];
}