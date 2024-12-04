# Mini Id - Unique ID Generator

A lightweight, scalable, and collision-free ID generator for Node.js and TypeScript projects. This library generates globally unique IDs using cryptographic randomness with optional support for prefixes, suffixes, and custom lengths.

---

## Quickstart

**1. Install**

```shell
npm install mini-id
```

**2. Create a Mini Id**

ESM-syntax (must use named exports):

```javascript
import { miniId } from "mini-id";
miniId(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```

... CommonJS:

```javascript
const { miniId } = require("mini-id");
miniId(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
```

---

## Features

-   **Global Uniqueness**: Ensures 0% collision using cryptographic randomness.
-   **Short IDs**: Generates short, scalable IDs (default: 14 characters).
-   **Customizable**: Supports custom prefixes, suffixes, and lengths (minimum length: 15 characters).
-   **TypeScript Support**: Fully typed for safe and easy development.
-   **Base62 Encoding**: Compact and efficient representation of IDs.

---

### Parameters

| Parameter      | Type     | Description                                                                                                                                                                                                              |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `prefix`       | `string` | A string to be added at the beginning of the generated ID. Useful for identifying or categorizing IDs by type or purpose.                                                                                                |
| `suffix`       | `string` | A string to be appended to the end of the generated ID. Useful for additional context or identification.                                                                                                                 |
| `customLength` | `number` | (Optional) Specifies the total desired length of the generated ID, including the prefix and suffix. Must be at least 15. If not provided, the default length is 14 characters plus the lengths of the prefix and suffix. |


## Author
Developed with ❤️ by Shakiqur Rahman.
