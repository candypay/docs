# `@candypay/react-checkout-sdk`

wip

## Installation

```bash
npm install @candypay/react-checkout-sdk
```

## Setup

The React SDK provides a wrapper component. In your `_app.js` or `_app.ts` file, import the wrapper component and wrap your app with it:

```jsx
import { CandypayCheckoutProvider } from "@candypay/react-checkout-sdk";

function MyApp({ Component, pageProps }) {
  return (
    <CandypayCheckoutProvider>
      <Component {...pageProps} />
    </CandypayCheckoutProvider>
  );
}
```

### Building an api route for the node sdk

First install the node sdk:

```bash
npm install @candypay/checkout-sdk
```

The node sdk is used to create a checkout session. To do this, you need to create an api route that will call the node sdk. In your `pages/api` folder, create a file called `checkout.js` and add the following code:

```js
import { CandyPay } from "@candypay/checkout-sdk";

const sdk = new CandyPay({
  api_key: process.env.CANDYPAY_PRIVATE_API_KEY!,
  network: "mainnet",
  collect_shipping_address: false
});

const handler = async (req, res) => {
  try {
    const response = await sdk.session.create({
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      tokens: ["dust", "gari", "samo"], // additional tokens
      items: [
        {
          name: "Item 1",
          price: 0.1, // price in USD
          image: "image_url",
          quantity: 1,
        },
      ],
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({
      error: "Error creating session",
    });
  }
};

export default handler;
```

### Integrating the Checkout Button

The React SDK provides a `CheckoutButton` component. To use it, import it and pass it a function that generates a new session by calling the api route you created in the previous step:

```jsx
import { CheckoutButton } from "@candypay/react-checkout-sdk";

function Checkout() {
  const createSession = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
    });

    const data = await response.json();

    return data.session_id;
  };

  return (
    <CheckoutButton handleSession={createSession}>Checkout</CheckoutButton>
  );
}
```
