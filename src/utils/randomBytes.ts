import { randomBytes as cryptoRandomBytes } from "crypto";

/**
 * Generate random bytes securely.
 * @param length - Number of bytes to generate.
 */
export function getRandomBytes(length: number): Uint8Array {
    return cryptoRandomBytes(length);
}
