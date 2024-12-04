const BASE62 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

/**
 * Encode a buffer to Base62 string.
 * @param buffer - Input buffer or byte array.
 */
export function encodeBase62(buffer: Uint8Array): string {
    let value = BigInt("0x" + Array.from(buffer).map((byte) => byte.toString(16).padStart(2, "0")).join(""));
    let result = "";

    while (value > 0) {
        const remainder = value % BigInt(62);
        result = BASE62[Number(remainder)] + result;
        value /= BigInt(62);
    }

    return result || "0";
}
