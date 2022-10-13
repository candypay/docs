# Mint module

The `mint` module can be accessed via `candypay.mint()` and provides the following methods:

- [mint](#mint)
- [gasless](#gasless)

### `mint`

The `mint` method allows you to generate instructions for minting a Candy Machine v2 in the default way, where the end-user would pay the gas fees.

**Parameters**:

- `network`: The cluster where the Candy Machine has been deployed i.e either `mainnet-beta` or `devnet`
- `candyMachineID`: The ID of the Candy Machine
- `payer`: The public key of the end-user

**Response**:

- `instructions`: An array of instructions required for gasless minting of the Candy Machine
- `mint`: Mint keypair of the NFT

**Example**:

```ts
import { CandyPay } from "@candypay/sdk";
import * as anchor from "@project-serum/anchor";
const candypay = new CandyPay();
const payer = new anchor.web3.PublicKey(
  "3DzHJzPZGBwp7uN5NSMDgQjLAo2qAF78XEMwacmnFDMk"
);
const { instructions, mint } = await candypay.mint.mint({
  candyMachineID: "GrVSy3ZRbuw5ACbwSEMsj9gULk9MW7QPK1TUYcP6nLM",
  network: "devnet",
  payer,
});
```

### `gasless`

The `gasless` method allows you to generate instructions for minting a Candy Machine v2 in the gasless way, where the end-user doesn't need pay the gas fees.

**Parameters**:

- `network`: The cluster where the Candy Machine has been deployed i.e either `mainnet-beta` or `devnet`
- `candyMachineID`: The ID of the Candy Machine
- `payer`: The public key of the wallet who would fund the gas fees
- `user`: The public key of the end-user

**Response**:

- `instructions`: An array of instructions required for gasless minting of the Candy Machine
- `mint`: Mint keypair of the NFT

**Example**:

```ts
import { CandyPay } from "@candypay/sdk";
import * as anchor from "@project-serum/anchor";
const candypay = new CandyPay();
const payer = new anchor.web3.PublicKey(
  "A9H9THrKpxUkusUpLQKmMsmG2eaLi2oR6xxzuPb7Rma2"
);
const user = new anchor.web3.PublicKey(
  "3DzHJzPZGBwp7uN5NSMDgQjLAo2qAF78XEMwacmnFDMk"
);
const { instructions, mint } = await candypay.mint.gasless({
  candyMachineID: "GrVSy3ZRbuw5ACbwSEMsj9gULk9MW7QPK1TUYcP6nLM",
  network: "devnet",
  payer,
  user,
});
```
