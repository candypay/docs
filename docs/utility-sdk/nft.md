# NFT module

The `nft` module can be accessed via `candypay.nft()` and provides the following methods:

- [`airdrop`](#airdrop)

## `airdrop`

The `airdrop` method allows you to airdrop certain NFT without having to create an NFT beforehand.

### Parameters

- `payer`: The public key of the wallet which would pay gas fees of the transaction
- `owner`: The public key of user to whom the NFT would be airdropped
- `network`: The cluster where the transaction would take place i.e either `mainnet-beta`, `devnet` or `testnet`
- `metadata`: The metadata regarding the NFT
- `rpc_url`: Custom RPC URL

### Response

- `signature`: The signature of the NFT airdrop transaction
- `accounts`: The accounts related to the NFT airdrop transaction i.e mint account, metadata account, master edition account and token account
- `blockhash`: The blockhash which is being used in the transaction

### Example

```ts
import { CandyPay } from "@candypay/sdk";
import * as anchor from "@project-serum/anchor";
import dotenv from "dotenv";
import base58 from "bs58";

dotenv.config();

const sdk = new CandyPay();

const PAYER = anchor.web3.Keypair.fromSecretKey(
  base58.decode(process.env.PAYER_SECRET_KEY!)
);
const USER = new anchor.web3.PublicKey(
  "2S9jKJEGKoVxR3xkEfFyGVrLwJj1H8xYjqtSP5LAX97x"
);

const { signature } = await sdk.nft.airdrop({
  metadata: {
    name: "DeGod",
    uri: "https://metadata.degods.com/g/4924.json",
    symbol: "DEGOD",
    collection: null,
    sellerFeeBasisPoints: 1000,
    creators: [
      {
        address: PAYER.publicKey,
        share: 100,
      },
    ],
    uses: null,
  },
  network: "devnet",
  owner: USER,
  payer: PAYER,
});

console.log(`Signature - ${signature}`);
```
