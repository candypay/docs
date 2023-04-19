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
    api_keys: {
      private_api_key: process.env.CANDYPAY_PRIVATE_API_KEY!,
      public_api_key: process.env.CANDYPAY_PUBLIC_API_KEY!,
    },
    network: "mainnet",
    config: {
      collect_shipping_address: false,
    },
  });
  ```

## Session module

The `session` module can be accessed via `candypay.session()` and provides the following methods:

- [`create`](#create)

### `create`

The `create` method creates and creates a new checkout session with the required configuration. It takes in the following parameters and returns `session_id`:

- `items` - An array of items which would be displayed on the checkout page. Each element of the `items` array is an object which would contain the `name`, `price`, `image`, `quantity` and `size` of the product
- `shipping_fees` - An optional param that takes shipping fees (value in $USD) and add it on total cart value to charge users (we currently only support static value for shipping fees, please charge accordingly)
- `metadata` - An optional param of type `object` that takes any data you would like to associate with your session and response it back in the get metadata and webhook routes. The value of this field is not shown on the payment page. 
- `tokens` - An array of SPL tokens in which the customer could pay. By default, `SOL` and [`USDC`](https://explorer.solana.com/address/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) ([`USDC-DEV`](https://explorer.solana.com/address/Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr?cluster=devnet) on devnet) would be shown to the customer on the checkout page. Currently the following SPL tokens are supported on mainnet:

  - [`BONK`](https://explorer.solana.com/address/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263)
  - [`SHDW`](https://explorer.solana.com/address/SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y)
  - [`SAMO`](https://explorer.solana.com/address/7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU)
  - [`DUST`](https://explorer.solana.com/address/DUSTcnwRpZjhds1tLY2NpcvVTmKL6JJERD9T274LcqCr)

It returns `session_id`, `order_id` and `payment_url` for the corresponding checkout session.

```ts
const session = await candypay.session.create({
  success_url: "https://your-website.com/checkout/success",
  cancel_url: "https://your-website.com/checkout/cancel",
  tokens: ["dust", "samo", "shdw"],
  items: [
    {
      name: "Throwback Hip Bag",
      price: 43.57, // value in USD
      image: "https://imgur.com/EntGcVQ.png",
      quantity: 1,
      size: "M", // optional
    },
  ],
  shipping_fees: 0.43, // optional | value in USD
  metadata: { 
      customer_name: "Jon Doe", 
  },  // optional 
});
```

### `metadata`

The `metadata` method returns the metadata of a specified checkout session. It takes in `session_id` as a parameter.

```ts
const metadata = await candypay.session.metadata({
  session_id: "cp_pay_34059991-d572-46db-bd1c-225e467ee414",
});
```

### `generatePaymentURL`

The `generatePaymentURL` method returns the checkout URL. It takes in `session_id` as a parameter. The `generatePaymentURL` doesn't create a new checkout session rather it returns the URL via which the payment can be completed.

```ts
const paymentURL = candypay.session.generatePaymentURL({
  session_id,
});
```
