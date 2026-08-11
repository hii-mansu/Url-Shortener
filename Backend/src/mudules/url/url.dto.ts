export interface CreateUrlDto {
    originalUrl: string;
}

export interface RedirectUrlDto {
    shortCode: string;
    userAgent: string;
    ip?: string;
}

export interface UpdateUrlDto {
    originalUrl?: string;
    isActive?: boolean;
    expiresAt?: Date | null;
}