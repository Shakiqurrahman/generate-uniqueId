import { encodeBase62 } from "./utils/base62";
import { getMachineId } from "./utils/machineId";
import { getRandomBytes } from "./utils/randomBytes";

/**
 * Generate a unique ID.
 *
 * This function generates a unique identifier using a combination of a timestamp,
 * random bytes, and a machine ID. You can customize the generated ID by providing
 * a prefix, a suffix, and/or a custom length.
 *
 * @param {string | number} [input] - A **string** prefix or a **number** custom length.
 * @param {string | number} [secondInput] - A **string** suffix or a **number** custom length (overrides first input if both are numbers).
 * @param {number} [thirdInput] - A **number** custom length (if only length is required).
 *
 * @returns {string} - The generated unique ID with optional customizations.
 */
export function miniId(
    input?: string | number,
    secondInput?: string | number,
    thirdInput?: number
): string {
    const randomBytesLength = 7;
    const timestamp = Date.now().toString(36); // Base36 timestamp
    const randomBytes = encodeBase62(getRandomBytes(randomBytesLength));
    const machineId = encodeBase62(getMachineId());

    // Parse inputs
    let prefix = "";
    let suffix = "";
    let customLength = 17;

    if (typeof input === "string") {
        prefix = input;
    } else if (typeof input === "number") {
        customLength = input;
    }

    if (typeof secondInput === "string") {
        suffix = secondInput;
    } else if (typeof secondInput === "number") {
        customLength = secondInput;
    }

    if (typeof thirdInput === "number") {
        customLength = thirdInput;
    }

    customLength = Math.max(customLength, 17);

    // Assemble ID core: timestamp + randomBytes + machineId
    const idCore = `${timestamp}${randomBytes}${machineId}`;
    const fullID = `${prefix}${idCore}${suffix}`;

    // If full ID exceeds custom length, trim the core part only to preserve prefix and suffix
    if (fullID.length > customLength) {
        const coreLength = customLength - prefix.length - suffix.length;
        return `${prefix}${idCore.slice(0, coreLength)}${suffix}`;
    }

    return fullID;
}
