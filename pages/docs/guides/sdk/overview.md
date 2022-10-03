# CandyPay SDK

CandyPay SDK lets you effortlessly create NFT minting functions for Candy Machine v2 collections. Simulate minting transactions for multiple use-cases like NFT collection launch, gasless mint and many more on Solana Blockchain!

## Installation

To install the SDK, run the following command:

```
npm install @candypay/sdk
      or
yarn add @candypay/sdk
```

## Documentation

The SDK currently has two core functions:

- `candypay.mint()`
- `candypay.gasless()`

## Using along Next.js

Using our SDK with Next.js can sometimes run in build time error cause of [Anchor](https://npmjs.com/package/@project-serum/anchor) library using the node native "fs" module. We highly recommend adding this export in `next.config.js` file before deployment:

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
