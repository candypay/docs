# Getting started

A quickstart guide to integrate CandyPay Mobile SDK into your mobile dApp. In the following guide we're going to use a Expo framework.

::: info API Keys
:lock: API Keys would be needed to integrate Checkout, Generate yours [here](https://candypay.fun)
:::
::: tip Source Code
:zap: Full source code for the demo app available [here](https://github.com/candypay-examples/mobile-sdk-example)
:::

## How it works

![UI](https://res.cloudinary.com/dtzqgftjk/image/upload/v1689171272/Untitled_design_32_c8nfub.png)

## Installing the required package:

Create a new Expo project and install the following packages. If you're not sure how to create an Expo application, refer to the documentation - https://docs.expo.dev/tutorial/create-your-first-app

- `@candypay/checkout-sdk` - Node.js SDK for interacting with CandyPay Checkout's API
- `@candypay/elements-mobile-sdk` - SDK for importing CandyPay's payment component into mobile dApps
- `@solana-mobile/mobile-wallet-adapter-protocol` - Connecting our app with Solana compatible mobile wallets
- `@solana/web3.js` - SDK used for interacting with the Solana blockchain and sending on-chain transactions
- `react-native-get-random-values` - This library works as a polyfill for the global `crypto.getRandomValues`
- `react-native-url-polyfill` - React Native does include a polyfill for URL, but this polyfill is homemade — in order to keep it lightweight

```bash
npm install @candypay/elements-mobile-sdk \
@candypay/checkout-sdk \
@solana-mobile/mobile-wallet-adapter-protocol \
@solana/web3.js \
react-native-get-random-values \
react-native-url-polyfill
```

## Initialise CandyPay SDK

Initialise the CandyPay SDK passing your created API Keys, along with the network you want to use whether `mainnet` or `devnet`.

```ts
import { CandyPay } from "@candypay/checkout-sdk";

const sdk = new CandyPay({
  api_keys: {
    private_api_key: process.env.CANDYPAY_PRIVATE_API_KEY!,
    public_api_key: process.env.CANDYPAY_PUBLIC_API_KEY!,
  },
  network: "mainnet", // use 'mainnet' for prod and 'devnet' for dev environment
  config: {
    collect_shipping_address: false,
  },
});
```

Create a function called `intentHandler` which would contain the logic for creating an intent session. The function takes in data like product and it's respective amount you would like to charge, tokens you would like to support for payment and create a unique session which your customer will pay for.

```ts
const intentHandler = async () => {
  const response = await candypay.paymentIntent.create({
    tokens: ["samo", "bonk"],
    items: [
      {
        name: "Test Product 1",
        image: "https://candypay.fun/assets/logo.png",
        price: 1,
        quantity: 1,
      },
    ],
  });

  return response;
};
```

## Integrating the Payment button

Go ahead and import the `PayButton` in your file and pass the `intentHandler` function that generates a new intent session we created in the previous step:

```tsx
import "react-native-get-random-values";
import "react-native-url-polyfill/auto";
import { PayButton } from "@candypay/elements-mobile-sdk";
import { CandyPay } from "@candypay/checkout-sdk";
import { StyleSheet, Text, ToastAndroid, View } from "react-native";

export default function App() {
  const candypay = new CandyPay({
    api_keys: {
      private_api_key: process.env.CANDYPAY_PRIVATE_API_KEY!,
      public_api_key: process.env.CANDYPAY_PUBLIC_API_KEY!,
    },
    network: "mainnet",
    config: {
      collect_shipping_address: false,
    },
  });

  const intentHandler = async () => {
    const response = await candypay.paymentIntent.create({
      tokens: ["shdw", "bonk", "dust", "samo"],
      items: [
        {
          name: "Test Product 1",
          image: "https://candypay.fun/assets/logo.png",
          price: 1,
          quantity: 1,
        },
      ],
    });

    return response;
  };

  const showToast = (msg: string) => {
    ToastAndroid.show(`${msg}`, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <PayButton
        network="mainnet"
        appIdentity={{ name: "My expo app" }}
        intentHandler={intentHandler}
        onSuccess={() => {
          showToast("Success");
        }}
        onError={(error) => {
          showToast(`Error: ${error as unknown as string}`);
        }}
      />
    </View>
  );
}
```

## Congratulations! :partying_face:

Your base app is ready to accept Solana Payments on Mobile in mins! Make sure to test your app and contact us at [Discord](https://discord.gg/VGjPXWUHGT) if you face any issues! Full source code available [here.](https://github.com/candypay-examples/mobile-sdk-example)

## Next steps

::: info [Guide (WIP)](https://ritvij14.notion.site/ritvij14/CandyPay-Guide-c43751458b6047799a1c1875376381a2)
🔥
Read this detailed guide to dive deeper into how to utilize mobile SDK with different wallet connecting methods & props for Pay Component.
:::
