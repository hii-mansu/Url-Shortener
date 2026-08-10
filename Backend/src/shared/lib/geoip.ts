import geoip from "geoip-lite";

export const getCountryFromIp = (ip: string): string => {
    const cleanIp = ip.replace(/^::ffff:/, "");

    const result = geoip.lookup(cleanIp);

    return result?.country ?? "Unknown";
};