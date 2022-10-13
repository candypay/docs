# NFT module

The `nft` module can be accessed via `candypay.nft()` and provides the following methods:

- [`airdrop`](#airdrop)

### airdrop

The `airdrop` method allows you to airdrop certain NFT without having to create a NFT beforehand.

**Parameters**:

- `network` - The cluster where the transaction would be simulated i.e either `mainnet-beta`, `devnet` or `testnet`
- `payer` - The public key of the wallet which would fund the gas fees of the transaction
- `owner` - The public key of the user to whom the NFT would be airdropped
- `metadata` - Metadata of the NFT

**Response**:

- `signature` - Signature of the transaction
- `mint` - Mint keypair of the NFT
- `blockhash` - Blockhash which was used for the transaction

**Example**:

```ts
import { CandyPay } from "@candypay/sdk";
import * as anchor from "@project-serum/anchor";
import dotenv from "dotenv";
import base58 from "bs58";
dotenv.config();
const candypay = new CandyPay();
const payer = anchor.web3.Keypair.fromSecretKey(
  base58.decode(process.env.PAYER_SECRET_KEY!)
);
try {
  const { signature } = await sdk.nft.airdrop({
    network: "devnet",
    payer,
    owner: new anchor.web3.PublicKey(
      "A9H9THrKpxUkusUpLQKmMsmG2eaLi2oR6xxzuPb7Rma2"
    ),
    metadata: {
      name: "DeGod",
      uri: "https://metadata.degods.com/g/4924.json",
      symbol: "DEGOD",
      collection: null,
      sellerFeeBasisPoints: 1000,
      creators: [
        {
          address: payer.publicKey,
          verified: true,
          share: 100,
        },
      ],
      uses: null,
    },
  });
} catch (err) {
  console.log(err);
}
```
