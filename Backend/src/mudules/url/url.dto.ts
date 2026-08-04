export interface CreateUrlDto {
    originalUrl: string;
}

export interface RedirectUrlDto {
    shortCode: string;
    userAgent: string;
    ip?: string;
}