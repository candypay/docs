# Gasless mint

The `candypay.gasless()` function would generate required instructions by which the user can mint NFTs without paying any gas fees or mint price. Gas fees here will be payed by the developer/platform by passing their keypair.

## Parameters

| Name             | Type                                                                                         | Description                                                    |
| ---------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `network`        | `mainnet-beta` or `devnet`                                                                   | Network on which the Candy Machine is deployed                 |
| `candyMachineID` | string                                                                                       | ID of the Candy Machine                                        |
| `payer`          | [`anchor.web3.PublicKey`](https://coral-xyz.github.io/anchor/ts/classes/web3.PublicKey.html) | Public key of the user who would pay the gas fees for the user |

## Response

| Name           | Type                                                                                                              | Description                                                                                                                                        |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mint`         | [`web3.Keypair`](https://solana-labs.github.io/solana-web3.js/classes/Keypair.html)                               | Keypair for newly created public key which is used to mint and assign NFT and is required to sign the transaction                                  |
| `instructions` | [`web3.TransactionInstruction`](https://solana-labs.github.io/solana-web3.js/classes/TransactionInstruction.html) | An array of instructions created based on given parameters and newly created `mint` keypair, used to pass in the transaction object to mint an NFT |
