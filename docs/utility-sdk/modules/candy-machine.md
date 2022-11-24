# Candy Machine module

The `candyMachine` module can be accessed via `candypay.candyMachine()` and provides the following methods:

- [mint](#mint)
- [gasless](#gasless)

## `mint`

The `mint` method returns the transaction object with the all the required instructions for minting a Candy Machine v2 in the default way, where the end-user would pay the gas fees.

### Parameters

- `network`: The cluster where the transaction would take place i.e either `mainnet-beta` or `devnet`
- `candyMachineId`: The address of the Candy Machine
- `user`: The public key of the end-user
- `rpc_url` (optional): Custom RPC URL

### Response

- `transaction`: The transaction object containing all the required instructions
- `blockhash`: Blockhash which is being used in the transaction
- `lastValidBlockHeight`: The last valid block height after which the transaction is declared expired
- `signers`: Array of signers which should be passed while sending the transaction to the network
- `mint`: The mint keypair which is used to sign the transaction

### Example

```ts
import { CandyPay } from "@candypay/sdk";
import * as anchor from "@project-serum/anchor";
import dotenv from "dotenv";
import base58 from "bs58";

dotenv.config();

const sdk = new CandyPay();
const connection = new anchor.web3.Connection(
  "https://metaplex.devnet.rpcpool.com"
);

const CANDY_MACHINE_ID = new anchor.web3.PublicKey(
  "GrVSy3ZRbuw5ACbwSEMsj9gULk9MW7QPK1TUYcP6nLM"
);
const PAYER = anchor.web3.Keypair.fromSecretKey(
  base58.decode(process.env.PAYER_SECRET_KEY!)
);

const { transaction, mint } = await sdk.candyMachine.mint({
  candyMachineId: CANDY_MACHINE_ID,
  network: "devnet",
  user: PAYER.publicKey,
});

const signature = await anchor.web3.sendAndConfirmTransaction(
  connection,
  transaction,
  [PAYER, mint]
);
console.log(`Signature - ${signature}`);
```

## `gasless`

The `gasless` method returns the transaction object with the all the required instructions for minting a Candy Machine v2 in the gasless way, where the end-user doesn't need pay the gas fees.

### Parameters

- `network`: The cluster where the transaction would take place i.e either `mainnet-beta` or `devnet`
- `candyMachineId`: The address of the Candy Machine from which the NFT would to be minted
- `payer`: The public key of the wallet which would pay the gas fees of the transaction
- `user`: The public key of the end-user
- `rpc_url` (optional): Custom RPC URL

### Response

- `transaction`: The transaction object containing all the required instructions
- `blockhash`: The blockhash which is being used in the transaction
- `lastValidBlockHeight`: The last valid block height after which the transaction is declared expired
- `signers`: Array of signers which should be passed while sending the transaction to the network
- `mint`: The mint keypair which is used to sign the transaction

### Example

```ts
import { CandyPay } from "@candypay/sdk";
import * as anchor from "@project-serum/anchor";
import dotenv from "dotenv";
import base58 from "bs58";

dotenv.config();

const sdk = new CandyPay();
const connection = new anchor.web3.Connection(
  "https://metaplex.devnet.rpcpool.com"
);

const CANDY_MACHINE_ID = new anchor.web3.PublicKey(
  "GrVSy3ZRbuw5ACbwSEMsj9gULk9MW7QPK1TUYcP6nLM"
);
const PAYER = anchor.web3.Keypair.fromSecretKey(
  base58.decode(process.env.PAYER_SECRET_KEY!)
);
const USER = new anchor.web3.PublicKey(
  "2S9jKJEGKoVxR3xkEfFyGVrLwJj1H8xYjqtSP5LAX97x"
);

const { transaction, mint } = await sdk.candyMachine.gasless({
  candyMachineId: CANDY_MACHINE_ID,
  network: "devnet",
  payer: PAYER.publicKey,
  user: USER,
});

const signature = await anchor.web3.sendAndConfirmTransaction(
  connection,
  transaction,
  [PAYER, mint]
);
console.log(`Signature - ${signature}`);
```
