# Introduction

### Thesis

- People feel unsafe while connecting their wallets to dApps due to the increasing number of scams in the web3 space. Users don’t want to lose their assets by connecting their wallets to a _rug pull NFT minting sites_. These sketchy minting sites have already stolen millions of dollars from people on Discord and other social media platforms.
- Most NFT project founders aren't developers and it's a pretty expensive and time-consuming process to hire one, with trust being an important factor! At the same time, creating the most delightful UX for minting is a hard process for developers, dealing with front-end, smart contracts, design, and security, all at the same time.
- User experience is a major issue too as it’s not a straightforward process for the end user who will be minting the NFT. They need to be on their Desktops all the time as the current Mobile UX is unbearable. The process needs to be seamless, despite user device preferences, while keeping speed and security at best.


### Product

- CandyPay is focused on simplifying and lowering the bars to enter NFT markets for a newbie. Built on top of the finest tech in the Solana ecosystem — Candy Machine v2 by Metaplex & Solana Pay, CandyPay currently offers two core products:

  - A no-code NFT minting QR code builder.
  - A public API for developers to easily integrate CandyPay in their NFT minting sites, with complete customizations and secure workflow for users.

- The no-code NFT minting QR code builder is focused on “no-techie” NFT collection founders. Project founders who can’t afford to hire front-end and smart contracts developers, or pay hefty fees to Launchpads can utilize our no-code builder. Just visit our no-code builder website (WIP), and input a few values such as the Candy Machine ID, network (either mainnet or devnet), etc. Customize your QR code designs and a QR code would be generated in some secs, **which is completely white-labeled and free to use, and can be exported any time!**
- We aren’t stopping only till generating the QR code, we are taking CandyPay to next level! Post-mint analytics will be available for every QR code, with multiple useful formats, so the project team can analyze the performance of their mint and even share it with their community members!
- With the help of CandyPay’s powerful infra, you can arrange **insane NFT minting events**, here are a few banger ideas:

  - A Pokémon go inspired game where QR codes are printed on flyers and located in various locations in a city. Users would need to hunt down these QR codes to “catch the Pokémon” (aka mint the Pokémon NFT), and users with the highest amount of mints/catches will be rewarded!
  - A crazy event where multiple drones would form a QR code in the sky, and users would need to scan that code to mint NFTs directly from the sky
  - Projects can even create minting experiences, right from a Tweet, Times Square Billboards, or maybe a Hot Air Balloon? **Opportunities are endless, we are here to help you with infrastructure to make it possible!**

- Developers can integrate CandyPay into their dApps with the help of CandyPay’s public API, completely free, customizable & secure to use!
- It’s completely free for NFT Projects & developers to integrate CandyPay into their dApps! We only charge a 2% service fee on every mint directly from end-users. This commission is dynamic and depends on the mint price of the Candy Machine ID. If the Candy Machine’s mint price is 0.2 SOL, then CandyPay would take a commission of 0.004 SOL. This is beneficial to end-users while minting NFTs as sometimes the static commission fee might be even higher than the Candy Machine’s mint price itself.
- Most of the NFT collections start a private mint which is only available for people who are whitelisted and have a specific SPL token in their wallet. These whitelisted people would get a discount on the mint price of the Candy Machine. CandyPay supports the whitelist/allow-list feature so that the NFT collection founders don’t have to drop the whitelist idea for sake of QR code NFT minting, and can commence their private sale pretty easily.

### How does CandyPay work?

CandyPay is powered by Candy Machine and Solana Pay under the hood, specifically speaking Solana Pay’s _“Transaction requests”_. Solana Pay’s transaction requests let one create dynamic transaction functions, without beforehand knowledge of user address, assets, and other details.

Whenever a QR code is generated via CandyPay, a unique ID is generated which is linked to that specific QR code. This QR code ID is used to fetch the metadata related to that specific QR code only.

When the user scans the QR code which is generated with the help of CandyPay, Phantom, or any other Solana wallet which supports transaction requests sends a `GET` request to the `/mint` route. The API would respond with the metadata related to the QR code. After successfully fetching the metadata, Phantom sends a `POST` request to the `/mint` route with the receiver's wallet address in the request’s body. A base58 serialized transaction is then responded to the wallet, which provides these transaction details to users. On approval, this transaction gets sent to the Solana blockchain and after a few seconds, the NFT reaches the user’s wallet!

![](https://imgur.com/OiA3ZJ3.png)

That's how this whole new NFT minting experience takes action in real life! Completely mobile native, directly from user mobile wallets, leveraging Solana Pay!

### Get early access to CandyPay's APIs

Get started to utilize the 'Scan to Mint' NFT minting experience in your dApps by filling out this quick form and getting your API keys. It's a fast, easy, and frictionless experience for your users! Fill out this quick form and let's build the next-gen NFT minting experience together 🤝 — https://tally.so/r/wzxrP0

### Get in Touch

- Discord: [Join now](https://discord.gg/VGjPXWUHGT)
- Mail: [hello@candypay.fun](mailto:hello@candypay.fun)
- Twitter: [@candypayfun](https://twitter.com/candypayfun)
