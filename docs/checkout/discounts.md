# Add discounts for payments

Reduce the amount charged to a customer by discounting their total due amount by a certain %, based on their NFT assets ownership.

Discounts with crypto payments power great flexibility over fiat and can be used to power multiple new use cases like, 
- Rewarding loyal users of your community/brand/product based on their NFT ownership
- Powering buy-to-redeem commerce by giving near 100% discount to customers if they hold the required NFTs
- Discounts overall converts users & drives more sales while providing backlink for users to join your community

## Finding the right Collection ID

We need to first get the unique `Collection ID` of a particular NFT collection on Solana, for which you want to power ownership-based discount on checkout!  

The process to find Collection ID is pretty straightforward,
- Visit [hellomoon.io/id](https://www.hellomoon.io/id)
- Enter name of the NFT collection
- Copy ID of the NFT collection you want to power discounts for

![ Copy ID of the NFT collection](https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/Screenshot%202023-01-31%20011235.png)


## Configure discounts while creating session

To add discounts in checkout, we need to configure the session module and pass the `discounts` object. The discounts object is passed uniquely on creation of each `session`, this gives merchants the flexibilty to power dynamic discounts, with dynamic data around the discount %, NFT collection to verify ownership for, etc.

The params for `discounts` object are as follows,
- `collection_id`: The unique ID of NFT collection
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
          collection_id:// [!code focus]
            "85bb7fdb666a3ac8a899dbd055a013b4", // [!code focus]
          discount: 0.2,// [!code focus]
          name: "LILY NFT",// [!code focus]
          image:// [!code focus]
            "https://i.ibb.co/chtf9qc/2691.png",// [!code focus]
        },// [!code focus]
    });

```

This way merchants can add discounts for payments on the checkout page, where holders of the provided NFT collection gets privilege to pay a discounted price, if transacted with a wallet they are holding NFTs in, meanwhile wallets without the required NFTs can transact for the total due amount.
