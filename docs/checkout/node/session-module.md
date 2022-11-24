# Session module

The `session` module can be accessed via `candypay.session()` and provides the following methods:

- [`create`](#create)

## `create`

The `create` method creates and creates a new checkout session with the required configuration. It takes in the following parameters and returns `session_id`:

- `items` - An array of items which would be displayed on the checkout page. Each element of the `items` array is an object which would contain the `name`, `price`, `image` and `quantity` of the product
- `tokens` - An array of SPL tokens in which the customer could pay. By default, `SOL` and [`USDC`](https://explorer.solana.com/address/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) ([`USDC-DEV`](https://explorer.solana.com/address/Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr?cluster=devnet) on devnet) would be shown to the customer on the checkout page. Currently, CandyPay checkout only supports the following tokens on mainnet:

  - [`SAMO`](https://explorer.solana.com/address/7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU)
  - [`DUST`](https://explorer.solana.com/address/DUSTcnwRpZjhds1tLY2NpcvVTmKL6JJERD9T274LcqCr)
  - [`SHDW`](https://explorer.solana.com/address/SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y)

    ```ts
    const session = await sdk.session.create({
      amount: amount,
      success_url: "https://your-website.com/checkout/session",
      cancel_url: "https://your-website.com/checkout/cancel",
      tokens: ["dust", "samo", "shdw"],
      items: [
        {
          name: "Throwback Hip Bag",
          price: 43.57,
          image: "https://imgur.com/EntGcVQ.png",
          quantity: 1,
        },
      ],
    });
    ```
