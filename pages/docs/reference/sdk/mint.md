# Mint

The `candypay.mint()` function would generate required instructions by which user can mint NFTs, by spending minting costs and gas fees.

## Parameters

| Name             | Type                                                                                         | Description                                                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `network`        | `mainnet-beta` or `devnet`                                                                   | Network on which the Candy Machine is deployed                                                                                  |
| `candyMachineID` | string                                                                                       | ID of the Candy Machine                                                                                                         |
| `payer`          | [`anchor.web3.PublicKey`](https://coral-xyz.github.io/anchor/ts/classes/web3.PublicKey.html) | The public key of the user who would pay the gas fees. In the case of this function, it would be the public key of the end-user |

## Response

| Name           | Type                                                                                                              | Description                                                                                                                                        |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mint`         | [`web3.Keypair`](https://solana-labs.github.io/solana-web3.js/classes/Keypair.html)                               | Keypair for newly created public key which is used to mint and assign NFT and is required to sign the transaction                                  |
| `instructions` | [`web3.TransactionInstruction`](https://solana-labs.github.io/solana-web3.js/classes/TransactionInstruction.html) | An array of instructions created based on given parameters and newly created `mint` keypair, used to pass in the transaction object to mint an NFT |
