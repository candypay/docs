# `@candypay/checkout-sdk`

## Installation

```bash
npm install @candypay/checkout-sdk
```

## Setup

The entrypoint to the Node.js SDK is `CandyPay` instance that will give you access to its API. It accepts an configuration object with the following fields:

- `private_api_key` - The private API key which is been issued to the developer while generating an API key
- `network` - The Solana cluster on which the payment checkout would take place i.e either `mainnet` or `devnet`
- `collect_shipping_address` - A boolean to configure whether to show a shipping address form on the checkout page

  ```ts
  import { CandyPay } from "@candypay/checkout-sdk";
  import dotenv from "dotenv";

  dotenv.config();

  const candypay = new CandyPay({
    private_api_key: process.env.CANDYPAY_PRIVATE_API_KEY!,
    network: "mainnet",
    config: {
      collect_shipping_address: true,
    },
  });
  ```
