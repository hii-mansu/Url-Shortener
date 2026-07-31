const CHARACTERS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const toBase62 = (num: number): string => {
    if (num === 0) {
        return CHARACTERS[0];
    }

    let shortCode = "";

    while (num > 0) {
        shortCode = CHARACTERS[num % 62] + shortCode;
        num = Math.floor(num / 62);
    }

    return shortCode;
};