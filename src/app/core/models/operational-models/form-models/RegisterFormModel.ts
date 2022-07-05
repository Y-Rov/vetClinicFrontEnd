export interface RegisterFormModel {
    firstName?: string;
    lastName?: string;
    birthDate?: Date;
    email?: string;
    phoneNumber?: string;
    profilePicture?: string | null;
    password?: string;
    confirmPassword?: string;
}