# Type Definitions

### Items

```ts
type Items = {
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
}[];
```

Example payload of `items` array:

```json
[
  {
    "name": "Solana Hoddie",
    "price": 85,
    "image": "https://imgur.com/FOFmXwO.png",
    "quantity": 1,
    "size": "M"
  },
  {
    "name": "Solana Neck Gaiter",
    "price": 18,
    "image": "https://imgur.com/tF3MaTI.png",
    "quantity": 2
  }
]
```

### Config

```ts
type Config = {
  collect_shipping_address: boolean;
};
```

Example payload of `config` object:

```json
{
  "collect_shipping_address": true
}
```

:::info
:bulb: Having `collect_shipping_address` as true while prompt the customer with a shipping form asking for their IRL address
:::

### Discounts

```ts
type Discounts = {
  verified_creator_address: string;
  name: string;
  image: string;
  discount: number;
};
```

Example payload of `discounts` object:

```json
{
  "verified_creator_address": "B4x93Px5YYcQdpvEKmbPMWKGC5a8hytNqpitQFsEAjDx",
  "name": "LILY",
  "image": "https://i.ibb.co/chtf9qc/2691.png",
  "discount": 0.2
}
```
