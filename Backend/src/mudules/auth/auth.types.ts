export interface RegisterUserDto {
    name: string;
    email: string;
    password: string;
}

export interface IUser{
    name: string;
    email: string;
    password: string;
    profilePicture?: string;
    refreshToken?: string;
    emailVerified: boolean;
    provider: "email" | "google";
}