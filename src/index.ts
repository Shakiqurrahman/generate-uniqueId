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

    // Initialize variables for prefix, suffix, and custom length
    let prefix = "";
    let suffix = "";
    let customLength = 17; // Default minimum length for the core part of the ID

    // Determine the prefix and custom length from input parameters
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

    // Ensure a minimum length of 17 characters for the core part of the ID
    customLength = Math.max(customLength, 17);

    // Assemble ID core: timestamp + randomBytes + machineId
    const idCore = `${timestamp}${randomBytes}${machineId}`;

    // Calculate the length of the core part, taking into account the prefix and suffix
    const coreLength = customLength - prefix.length - suffix.length;

    // If the core length is positive, slice the core part to fit within the custom length
    const fullCore = coreLength > 0 ? idCore.slice(0, coreLength) : idCore;

    // Return the final ID with prefix, core part, and suffix
    return `${prefix}${fullCore}${suffix}`;
}
