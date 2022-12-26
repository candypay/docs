# Add discounts for payments

Reduce the amount charged to a customer by discounting their total due amount by a certain %, based on their NFT assets ownership.

Discounts with crypto payments power great flexibility over fiat and can be used to power multiple new use cases like, 
- Rewarding loyal users of your community/brand/product based on their NFT ownership
- Powering buy-to-redeem commerce by giving near 100% discount to customers if they hold the required NFTs
- Discounts overall converts users & drives more sales while providing backlink for users to join your community

## Finding the right Creator Address

Whether ownership based discounts is being provided for a `CandyMachine Collection` or 1/1 `Master Edition NFTs`, we need to find the NFT's first verified creator address in order to power this feature on checkout!

The process to find NFT's verified creator address is pretty straightforward,
- Open the NFT address on [Solscan](https://solscan.io/) explorer
- Visit the `Metadata` tab here
- Under the Creators array, the first `address` with `verified` value as 1 is what we'll need to further power this feature. 

::: info :zap: Note, only use the creator address whose verified value is 1 
:::

![Creator Address with verified value as 1](https://i.ibb.co/s9x3jRq/pika-1672086667584-1x.png)


## Configure discounts while creating session

To add discounts in checkout, we need to configure the session module and pass the `discounts` object. The discounts object is passed uniquely on creation of each `session`, this gives merchants the flexibilty to power dynamic discounts, with dynamic data around the discount %, NFT collection to verify ownership for, etc.

The params for `discounts` object are as follows,
- `verified_creator_address`: The first creator address of the NFT, with verified value as 1
- `discount`: Percentage of discount to be deducted from the total due amount, depicted in decimals. For a 20% discount, merchants need to pass 0.2, for a 75% discount 0.75 will be passed and respectively
- `name`: Name of the NFT to show customers on the checkout page
- `image`: Image of the NFT to show customers on the checkout page

```ts
    const response = await sdk.session.create({
      success_url: `${process.env.STATIC_URL}/success`,
      cancel_url: `${process.env.STATIC_URL}/cancel`,
      tokens: ["dust", "samo"], 
      items: [
        {
          name: "Solana Shades",
          price: 0.1, // price in USD
          image: "https://imgur.com/M0l5SDh.png",
          quantity: 1,
          size: "9", // optional product size param
        },
      ], 
       discounts: { // [!code focus]
          verified_creator_address:// [!code focus]
            "B4x93Px5YYcQdpvEKmbPMWKGC5a8hytNqpitQFsEAjDx", // [!code focus]
          discount: 0.2,// [!code focus]
          name: "LILY NFT",// [!code focus]
          image:// [!code focus]
            "https://i.ibb.co/chtf9qc/2691.png",// [!code focus]
        },// [!code focus]
    });

```

This way merchants can add discounts for payments on the checkout page, where holders of the provided NFT collection gets privilege to pay a discounted price, if transacted with a wallet they are holding NFTs in, meanwhile wallets without the required NFTs can transact for the total due amount.
