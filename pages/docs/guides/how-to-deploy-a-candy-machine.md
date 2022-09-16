# How to create a Candy Machine using Sugar CLI

Heya builders! We're going to be launching an NFT collection on Solana in no time using Metaplex’s new Candy Machine tool — Sugar CLI. Sugar CLI comes with quite a few improvements:

1. Improved Arweave upload performance, the image upload operations take advantage of multithreaded systems to significantly speed up the computational time.
2. Simplified UX
3. Robust error handling and validation of the inputs
4. Simplified installation step, Sugar CLI comes with a ready-to-use distributable binary which simplifies the install step

## Prerequisites

The guide assumes that you have:

1. [Node.js](https://nodejs.org/en/) installed
2. the [Solana CLI tools](https://docs.solana.com/cli/install-solana-cli-tools) installed
3. either [Phantom](https://phantom.app/) or [Solflare](https://solflare.com/) extension installed
4. a unix-based terminal

## Installing Sugar CLI

### Windows

1. Download the windows installer from [here](https://github.com/metaplex-foundation/winstaller/releases/latest/download/winstaller.exe)
2. You get a warning about untrusted binary, click on "More Info" and then "Run anyway"
3. If Sugar CLI has being successfully installed, you would see a success message saying that "Sugar successfully installed!

### Unix based systems

For unix based systems such as macOS, Linux and Windows Subsystem for Linux (WSL), the recommend installtion step is to run the following command:

```bash
bash <(curl -sSf https://sugar.metaplex.com/install.sh)
```

You may need to install some additional dependencies when installtion Sugar CLI on Ubuntu or WSL.

```bash
sudo apt install libudev-dev pkg-config unzip
```

### using Crates.io

To install Sugar CLI using Crates.io, run the following command:

```bash
cargo install sugar-cli
```

Amazing! You're now ready to create Candy Machines 🍭

## Setting up a new wallet

Sugar CLI allows you to set your wallet and RPC related to your Candy Machine directly via Solana CLI, so that you don't need to re-type them in each Sugar CLI command.

Create a new wallet for funding your Candy Machine's gas fees with the following command:

```bash
solana-keygen new --outfile ./candy-machine-keypair.json
```

Configure the newly-created wallet via the `solana config` command:

```bash
solana config set --keypair ./candy-machine-keypair.json
```

## Funding the wallet

We would need to establish a connection to desired cluster before running the `solana airdrop` command. As we're testing stuff out, we are going to establish a connection to Solana's devnet cluster.

```bash
solana config set --url https://api.devnet.solana.com
```

Now to fund your wallet, run the following command:

```bash
solana airdrop 1
```

This would airdrop 1 $SOL on the configured network, in our case its devnet

## Preparing NFT assets

Its now time to prepare the NFT assets (images and metadata). We would need to create a new folder for storing our NFT's assets.

```bash
mkdir candy-machine-sugar-cli
cd candy-machine-sugar-cli
```

Metaplex has a set of [sample assets](https://docs.metaplex.com/assets/files/assets-ff6bd873ecd07b49c86faf3c7aab82d2.zip) which we can use to test and deploy our own NFT collection via Sugar CLI. Download the sample assets and move the `assets` folder from the extracted folder to your project directory

You would be seeing files named `0.json`, `0.png`, `1.json`, `1.png` in such pattern under the `assets` folder. Sugar CLI needs you to store the NFT images in a simple number format which starts from `0` and increase sequentially, i.e `0.png`, `1.png`, `2.png`. The JSON files contain the metadata of each NFT, `0.json` contains the metadata for the NFT whose image is `0.png`.

The JSON files follow Metaplex's [URI JSON schema](https://docs.metaplex.com/programs/token-metadata/token-standard#the-non-fungible-standard) and here is a sample JSON file:

```json
{
  "name": "Number #0001",
  "symbol": "NB",
  "description": "Collection of 10 numbers on the blockchain. This is the number 1/10.",
  "image": "0.png",
  "attributes": [
    {
      "trait_type": "Number",
      "value": "0"
    }
  ],
  "properties": {
    "files": [
      {
        "uri": "0.png",
        "type": "image/png"
      }
    ]
  }
}
```

As you can see the JSON files links to their respective image files.

## Configuring Candy Machine

Create a new file called `config.json` in root directory of your project folder.

```bash
echo > config.json
```

Copy and paste the below configuration into the `config.json` file:

```json
{
  "price": 0.01,
  "number": 10,
  "symbol": "NB",
  "sellerFeeBasisPoints": 500,
  "gatekeeper": null,
  "solTreasuryAccount": "YOUR_WALLET_ADDRESS",
  "splTokenAccount": null,
  "splToken": null,
  "endSettings": null,
  "whitelistMintSettings": null,
  "hiddenSettings": null,
  "uploadMethod": "bundlr",
  "awsS3Bucket": null,
  "retainAuthority": true,
  "isMutable": true,
  "creators": [
    {
      "address": "YOUR_WALLET_ADDRESS",
      "share": 100
    }
  ]
}
```

Make sure to change the `YOUR_WALLET_ADDRESS` placeholder with the public key of newly created wallet. If you have forgot to store the public key of the wallet, run `solana address` command in the terminal.

The project's folder structure would look something like this now:

```
.
├── assets/
│   ├── [0-9].png
│   └── [0-9].json
└── config.json
```

## Validating the configuration

Let's now validate the configuration beforehand so that nothing goes wrong while deployment. To validate our Candy Machine's configuration, run the following command in the terminal:

```bash
sugar validate
```

If the configuration doesn't have any issues, Sugar CLI should return a success message.

![](https://imgur.com/Uw0dpOs.png)

## Creating Candy Machine

Its now time to upload the asset files to Arweave and deploy the Candy Machine. Sugar CLI makes it pretty simple to upload and deploy the Candy Machine

### Uploading image assets

To upload the asset files, run the following command in the terminal:

```bash
sugar upload
```

You would see something like this, if the upload operation is successful:

![](https://imgur.com/LVIqfQD.png)

### Deploying Candy Machine

To deploy the Candy Machine, run the following command in the terminal:

```bash
sugar deploy
```

You would see something like this, if the Candy Machine creation operation is successful:

![](https://imgur.com/usOaXCQ.png)

> If you face an error saying `Blockhash not found`, re-run the command again

Voila 🎉! There you go we have successfully created a Candy Machine

### Verifying Candy Machine

Let's make sure that everything went as we have expected. Run the following command in the terminal:

```bash
sugar verify
```

You would see something like this, if nothing went wrong in between:

![](https://imgur.com/GZKtaDP.png)

### Testing Candy Machine

Let's try minting an NFT from our Candy Machine via Sugar CLI. Run the following command in the terminal:

```bash
sugar mint
```

![](https://imgur.com/cHWhrSb.png)

# Conclusion

Congrats! You have created a Candy Machine using Metaplex's Sugar CLI and you're now ready to create a QR code mint for your Candy Machine via [CandyPay](https://candypay.fun) 🏄‍♂️

If you have any feedback regarding this guide, reach us out on [Discord](https://discord.com/invite/VGjPXWUHGT) or [Twitter](https://twitter.com/candypayfun)
