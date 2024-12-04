import { createHash } from "crypto";
import { networkInterfaces } from "os";

/**
 * Generate a machine ID based on network MAC address.
 */
export function getMachineId(): Uint8Array {
    const interfaces = networkInterfaces();
    const macs = Object.values(interfaces)
        .flat()
        .filter((details) => details?.mac && details.mac !== "00:00:00:00:00:00")
        .map((details) => details!.mac)
        .join("");
    const hash = createHash("sha256").update(macs).digest();
    return hash.slice(0, 4); // Use first 4 bytes for machine ID
}
