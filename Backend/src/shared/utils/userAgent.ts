import { UAParser } from "ua-parser-js";

export const parseUserAgent = (userAgent: string) => {
    const result = new UAParser(userAgent).getResult();

    return {
        browser: result.browser.name || "Unknown",
        os: result.os.name || "Unknown",
        device: result.device.type || "Desktop",
    };
};