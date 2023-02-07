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

## Usage

### The React SDK provides a `useCheckout` hook. Import it like so:

```jsx
import { useCheckout } from "@candypay/react-checkout-sdk";
```

### To use the hook, call it like so:

```jsx
const generateSessionId = async () => {
  const response = await fetch("/api/session");
  const data = await response.json();
  return data.session_id;
};
};

const { mutate, isLoading } = useCheckout(generateSessionId)

```

In the above example, `generateSessionId` is a function that returns a Promise that resolves to a session ID.

### Using the exported `mutate` function

```jsx
return (
  <button
    onClick={() => {
      mutate();
    }}
  >
    Checkout
  </button>
);
```

The hook also returns a `isLoading` boolean that you can use to show a loading state.

### Styling

For styling, you're free to use any solution you like. Here's an example using Tailwind CSS with a loader:

```jsx
<button
  className="w-36 font-body px-8 h-10 rounded-md bg-indigo-600 text-white text-[16px] hover:bg-indigo-700 grid place-items-center"
  onClick={async () => {
    await mutate();
  }}
>
  {isLoading ? (
    <div className="h-3 w-3 bg-indigo-50 rounded-full animate-ping"></div>
  ) : (
    "Checkout"
  )}
</button>
```

Moreover, the SDK also provides a `CheckoutButton` component that you can use to render a checkout button. Here's an example for the same:

```jsx
import type { NextPage } from "next";
import { CheckoutButton } from "@candypay/react-checkout-sdk";

const Home: NextPage = () => {
  const createSession = async () => {
    const response = await fetch("/api/create-session", {
      method: "POST",
    });
    const data = await response.json();

    return data.session_id;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <img src="https://imgur.com/M0l5SDh.png" alt="solana shades" />
      <p>Buy your Solana Shades</p>
      <CheckoutButton handleSession={createSession}>Checkout</CheckoutButton>
    </div>
  );
};

export default Home;
```

### Customizing the checkout button

The `CheckoutButton` component accepts a `className` prop that you can use to customize the button. Here's an example:

```jsx
<CheckoutButton
  handleSession={createSession}
  className="w-36 font-body px-8 h-10 rounded-md bg-indigo-600 text-white text-[16px] hover:bg-indigo-700 grid place-items-center"
>
  Checkout
</CheckoutButton>
```
