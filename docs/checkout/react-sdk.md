# `@candypay/react-checkout-sdk`

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
