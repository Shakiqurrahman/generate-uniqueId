# Unique ID Generator

A lightweight, scalable, and collision-free ID generator for Node.js and TypeScript projects. This library generates globally unique IDs using cryptographic randomness with optional support for prefixes, suffixes, and custom lengths.

---

## Quickstart

**1. Install**

```shell
npm install uuid
```

**2. Create a UUID**

ESM-syntax (must use named exports):

```javascript
import { v4 as uuidv4 } from "uuid";
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```

... CommonJS:

```javascript
const { v4: uuidv4 } = require("uuid");
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
```

---

## Features

-   **Global Uniqueness**: Ensures 0% collision using cryptographic randomness.
-   **Short IDs**: Generates short, scalable IDs (default: 14 characters).
-   **Customizable**: Supports custom prefixes, suffixes, and lengths (minimum length: 15 characters).
-   **TypeScript Support**: Fully typed for safe and easy development.
-   **Base62 Encoding**: Compact and efficient representation of IDs.

---

### uuid.parse(str)

Convert UUID string to array of bytes

| Parameter      | Type     | Description                                                                                                                                                                                                              |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `prefix`       | `string` | A string to be added at the beginning of the generated ID. Useful for identifying or categorizing IDs by type or purpose.                                                                                                |
| `suffix`       | `string` | A string to be appended to the end of the generated ID. Useful for additional context or identification.                                                                                                                 |
| `customLength` | `number` | (Optional) Specifies the total desired length of the generated ID, including the prefix and suffix. Must be at least 15. If not provided, the default length is 14 characters plus the lengths of the prefix and suffix. |
