import { encodeBase62 } from "./utils/base62";
import { getMachineId } from "./utils/machineId";
import { getRandomBytes } from "./utils/randomBytes";

/**
 * Generate a unique ID.
 * @param input - A prefix/suffix (string) or custom length (number).
 * @param secondInput - A suffix if first input is a prefix or a custom length (number).
 */
export function miniId(input?: string | number, secondInput?: string | number): string {
    const randomBytesLength = 7; // Fixed length for random bytes
    const timestamp = Date.now().toString(36); // Base36 timestamp
    const randomBytes = encodeBase62(getRandomBytes(randomBytesLength));
    const machineId = encodeBase62(getMachineId());

    // Parse inputs
    let prefix = "";
    let suffix = "";
    let customLength = 17;

    if (typeof input === "string") prefix = input;
    if (typeof secondInput === "string") suffix = secondInput;
    if (typeof input === "number") customLength = input;
    if (typeof secondInput === "number") customLength = secondInput;

    // Ensure minimum length of 17 characters
    customLength = Math.max(customLength, 17);

    // Assemble ID
    const idCore = `${timestamp}${randomBytes}${machineId}`;
    const fullID = `${prefix}${idCore}${suffix}`;

    // Trim to custom length, if applicable
    return fullID.slice(0, customLength);
}
