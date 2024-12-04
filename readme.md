# Unique ID Generator

A lightweight, scalable, and collision-free ID generator for Node.js and TypeScript projects. This library generates globally unique IDs using cryptographic randomness with optional support for prefixes, suffixes, and custom lengths.

---

## Features

- **Global Uniqueness**: Ensures 0% collision using cryptographic randomness.
- **Short IDs**: Generates short, scalable IDs (default: 14 characters).
- **Customizable**: Supports custom prefixes, suffixes, and lengths (minimum length: 15 characters).
- **TypeScript Support**: Fully typed for safe and easy development.
- **Base62 Encoding**: Compact and efficient representation of IDs.

---

## Installation

Install the package via npm:

```bash
npm install mini-id

```

Parameters
generateShortUniqueID(prefixOrLength?: string | number, suffixOrLength?: string | number, customLength?: number): string

Parameter	Type	Description
prefixOrLength	`string	number`
suffixOrLength	`string	number`
customLength	number	(Optional) Specifies the desired total length of the generated ID. If not provided, the ID length defaults to 14 + prefix/suffix. Minimum total length: 15.
