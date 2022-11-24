# `@candypay/sdk`

CandyPay SDK lets you effortlessly create NFT minting functions for Candy Machine v2 collections. Simulate minting transactions for multiple use-cases like NFT collection launch, gasless mint and many more on Solana Blockchain!

## Installation

```bash
npm install @candypay/sdk @project-serum/anchor
```

## Setup

The entry point to the SDK is a `CandyPay` instance that will give you access to its API.

```ts
import { CandyPay } from "@candypay/sdk";
const candypay = new CandyPay();
```

## Using along Next.js

Using our SDK with Next.js can sometimes run in build time error cause of [Anchor](https://npmjs.com/package/@project-serum/anchor) library using the Node.js native [fs](https://nodejs.org/api/fs.html) module. We highly recommend adding this export in `next.config.js` file before deployment:

```js
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
```
